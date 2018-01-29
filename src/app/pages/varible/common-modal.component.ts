import { Component, Input } from '@angular/core';
// import { NzModalService } from 'ng-zorro-antd';
// import { NzModalCustomizeComponent } from './nz-modal-customize.component';

@Component({
  selector: '[varibleModal]',
  template:`
    <a (click)="showModal(obj)" *ngIf="obj.code=='READ'||obj.code == 'UPDATE'||obj.code == 'CREATE'">
      <span>{{obj.bn}}</span>
    </a>
    <button nz-button [nzType]="'primary'" (click)="showModal(obj)" *ngIf="false">
      <span>{{obj.bn}}</span>
    </button>

    <nz-modal [nzVisible]="isVisible" [nzWidth]="1024" [nzTitle]="'第一个 Modal'" [nzContent]="modalContent" (nzOnCancel)="handleCancel($event)" (nzOnOk)="handleOk($event)" style="display:inline-block" *ngIf="obj.code=='CREATE'">
      <ng-template #modalContent>
      <div nz-row nzGutter="8">
               <div nz-col [nzSpan]="24">
                   <div nz-row nzGutter="8">
                       <div nz-col [nzSpan]="6">
                           <section class="code-box">
                               <ngTree [treeData]="treeData" [treeConfig]="treeConfig"></ngTree>
                           </section>
                       </div>
                       <div nz-col [nzSpan]="18">
                           <section class="code-box">
                               <nz-demo-form-mix></nz-demo-form-mix>
                           </section>
                       </div>
                   </div>
               </div>
           </div>
      </ng-template>
    </nz-modal>

    <nz-modal [nzVisible]="isVisible" [nzWidth]="1024" [nzTitle]="'第一个 Modal'" [nzContent]="modalContent" (nzOnCancel)="handleCancel($event)" (nzOnOk)="handleOk($event)" style="display:inline-block" *ngIf="obj.code=='READ'||obj.code=='UPDATE'">
      <ng-template #modalContent>
        <div nz-row nzGutter="8">
          <div nz-col [nzSpan]="24" *ngIf="obj.code=='UPDATE'">
            <div nz-row nzGutter="8">
              <div nz-col [nzSpan]="8">
                <nz-input [(ngModel)]="obj.data.name" [nzPlaceHolder]="'规则名称'"></nz-input>
              </div>
              <div nz-col [nzSpan]="8">
                <nz-input [(ngModel)]="obj.data.age" [nzPlaceHolder]="'版本'" ></nz-input>
              </div>
              <div nz-col [nzSpan]="8">
                <nz-input [(ngModel)]="obj.data.address" [nzPlaceHolder]="'创建人'"></nz-input>            
              </div>
            </div>
          </div>
          <div nz-col [nzSpan]="24" *ngIf="obj.code=='READ'">
           {{obj.data.name}}
           {{obj.data.age}}
           {{obj.data.address}}
          </div>
        </div>
      </ng-template>
    </nz-modal>
  `,
  // providers: [NzModalService]

})
export class CommonModal {
  @Input() obj: object;
  
  isVisible = false;
  showModal = (obj:object) => {
    console.log(obj)
    this.obj = obj;
    this.isVisible = true;
  }

  handleCancel = (e:Event) => {
    console.log(e);
    this.isVisible = false;
  }


  currentModal: any;
  isConfirmLoading = false;

  handleOk(e: any) {
    this.isConfirmLoading = true;
    setTimeout(() => {
      /* destroy方法可以传入onOk或者onCancel。默认是onCancel */
      this.currentModal.destroy('onOk');
      this.isConfirmLoading = false;
      this.currentModal = null;
    }, 1000);
  }

  public treeData: any[] = [
    {
      name: "folder",
      isOpen: true,
      iconSelector: "computer",
      nameSelector: "warning",
      nodes: [
        {
          name: 'file'
        }
      ]
    },
    {
      name: 'another folder',
      nodes: [
        {
          name: 'another file'
        },
        {
          name: 'another file 2 '
        }
      ]
    },
    {
      name: 'folder3',
      nodes: [
        {
          name: 'another file'
        }
      ]
    },
    {
      name: 'folder4',
      nodes: [
        {
          name: 'another file'
        }
      ]
    },
    {
      name: 'folder5',
      nodes: [
        {
          name: 'another file'
        }
      ]
    }

  ];

  public treeConfig: any = {
    dataMap: {
      children: "nodes"
    }
  }

}


