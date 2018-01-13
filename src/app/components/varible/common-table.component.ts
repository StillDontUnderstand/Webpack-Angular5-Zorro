import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'commonTable',
  // template:`{{data}}`,
  template: `
    <nz-table #nzTable [nzDataSource]="data" [nzPageSize]="10" [nzLoading]="_loading" [nzSize]="'defalut'" >
      <thead nz-thead>
        <tr>
          <th nz-th>
            <span>规则名称</span>
            <nz-dropdown [nzTrigger]="'click'" [nzClickHide]="false">
              <i class="anticon anticon-smile-o ant-table-filter-icon" nz-dropdown></i>
              <div nz-dropdown-custom class="custom-filter-dropdown">
                <nz-input [nzPlaceHolder]="'Search name'" [(ngModel)]="searchValue"></nz-input>
                <button nz-button [nzType]="'primary'" (click)="search()">Search</button>
              </div>
            </nz-dropdown>
          </th>
          <th nz-th>
            <span>版本</span>
            <nz-table-sort [(nzValue)]="sortMap.name" (nzValueChange)="sort('name',$event)"></nz-table-sort>            
          </th>
          <th nz-th>
            <span>创建人</span>
            <nz-dropdown [nzTrigger]="'click'">
              <i class="anticon anticon-filter" nz-dropdown></i>
              <ul nz-menu>
                <li nz-menu-item *ngFor="let filter of filterAddressArray">
                  <label nz-checkbox [(ngModel)]="filter.value">
                    <span>{{filter.name}}</span>
                  </label>
                </li>
              </ul>
              <div nz-table-filter>
                <span nz-table-filter-confirm (click)="search()">OK</span>
                <span nz-table-filter-clear (click)="reset(filterAddressArray)">Reset</span>
              </div>
            </nz-dropdown>
          </th>
          <th nz-th>
            <span>操作</span>
            <span varibleModal [obj]="{bn:'添加规则',code:'CREATE',data:''}" style="float:right;"></span>
           </th>
        </tr>
      </thead>
      <tbody nz-tbody>
        <tr nz-tbody-tr *ngFor="let data of nzTable.data">
          <td nz-td>
            <a>{{data.name}}</a>
          </td>
          <td nz-td>{{data.age}}</td>
          <td nz-td>{{data.address}}</td>
          <td nz-td>
            <span>
              <span varibleModal [obj] = "{bn:'查看',code:'READ',data:data}"></span>
              <span nz-table-divider></span>
              <span varibleModal [obj] = "{bn:'编辑',code:'UPDATE',data:data}"></span>
              <span nz-table-divider></span>
              
              <nz-dropdown>
                <a class="ant-dropdown-link" nz-dropdown>
                  More actions <i class="anticon anticon-down"></i>
                </a>
                <ul nz-menu>
                  <li nz-menu-item>
                    <a target="_blank" rel="noopener noreferrer" >1st menu item</a>
                  </li>
                  <li nz-menu-item>
                    <a target="_blank" rel="noopener noreferrer" >2nd menu item</a>
                  </li>
                  <li nz-menu-item>
                    <a target="_blank" rel="noopener noreferrer" >3rd menu item</a>
                  </li>
                </ul>
              </nz-dropdown>
            </span>
          </td>
        </tr>
      </tbody>
    </nz-table>`,
  styles: [
    `
      .custom-filter-dropdown {
        padding: 8px;
        border-radius: 6px;
        background: #fff;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
      }

      .custom-filter-dropdown ::ng-deep nz-input {
        width: 130px;
        margin-right: 8px;
      }

      .highlight {
        color: #f50;
      }
    `
  ]
})
export class CommonTableComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
  ) { }
  searchValue = '';
  filterAddressArray = [
    { name: 'John Brown', value: false },
    { name: 'Jim Red', value: false }
  ];
  sortMap: any = {
    name: null,
    age: null,
    address: null
  };
  sortName: any = null;
  sortValue: any = null;
  data: any = [];

  copyData: any;
  _loading = false;
  sort(sortName: any, value: any) {
    this.sortName = sortName;
    this.sortValue = value;
    Object.keys(this.sortMap).forEach(key => {
      if (key !== sortName) {
        this.sortMap[key] = null;
      } else {
        this.sortMap[key] = value;
      }
    });
    this.search();
  }
  search() {
    const searchAddress = this.filterAddressArray.filter(address => address.value);
    const filterFunc = (item: any) => {
      return (searchAddress.length ? searchAddress.some(address => item.address.indexOf(address.name) !== -1) : true) &&
        (item.name.indexOf(this.searchValue) !== -1)
    };
    this.data = [...this.copyData.filter((item: any) => filterFunc(item))];
    this.data = [...this.data.sort((a: any, b: any) => {
      if (a[this.sortName] > b[this.sortName]) {
        return (this.sortValue === 'ascend') ? 1 : -1;
      } else if (a[this.sortName] < b[this.sortName]) {
        return (this.sortValue === 'ascend') ? -1 : 1;
      } else {
        return 0;
      }
    })];
  }

  reset(array: Array<any>) {
    array.forEach(item => {
      item.value = false;
    });
    this.search();
  }

  ngOnInit() {
    // 从mock服务获取数据
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.data = []
        //数据加载完毕前load动画
        // this._loading = true;
        //切换路由触发数据请求
        return this.http.get('api/data' + params.get('id'))
        // 
      }).subscribe((data) => {
        console.info('!!!!!!');
        this.data = data.json();
        //数据接受完毕取消加载动画
        this._loading = false;
        console.info(data);
      })
  }

}
