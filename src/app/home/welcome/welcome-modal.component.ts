import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {
    FormBuilder,
    FormGroup,
    Validators
  } from '@angular/forms';
  console.info('nz-demo-modal-async')
@Component({
    selector: 'nzModalAsync',
    template: `
    <li class="ant-menu-item" style="padding-right:10px;float:right;" >
        <a  rel="noopener noreferrer" (click)="showModal()" style="color:#fff;" >登录/注册</a>
    </li >  
    <nz-modal  [nzWidth]="420" [nzVisible]="isVisible" [nzTitle]="modalTitle" [nzContent]="modalContent" [nzFooter]="modalFooter" (nzOnCancel)="handleCancel($event)">
        <ng-template #modalContent >
            <form nz-form style="margin-left:45px;margin-top:35px;" [formGroup]="validateForm" class="login-form" (ngSubmit)="_submitForm()">
                <div nz-form-item>
                <div nz-form-control [nzValidateStatus]="validateForm.controls.userName">
                    <nz-input formControlName="userName" [nzPlaceHolder]="'用户名'" [nzSize]="'large'">
                    <ng-template #prefix>
                        <i class="anticon anticon-user"></i>
                    </ng-template>
                    </nz-input>
                    <div nz-form-explain *ngIf="validateForm.controls.userName.dirty&&validateForm.controls.userName.hasError('required')">Please input your username!</div>
                </div>
                </div>
                <div nz-form-item>
                <div nz-form-control [nzValidateStatus]="validateForm.controls.password">
                    <nz-input formControlName="password" [nzType]="'password'" [nzPlaceHolder]="'密码'" [nzSize]="'large'">
                    <ng-template #prefix>
                        <i class="anticon anticon-lock"></i>
                    </ng-template>
                    </nz-input>
                    <div nz-form-explain *ngIf="validateForm.controls.password.dirty&&validateForm.controls.password.hasError('required')">Please input your Password!</div>
                </div>
                </div>
                <div nz-form-item>
                <div nz-form-control>
                    <label nz-checkbox formControlName="remember">
                    <span>记住我</span>
                    </label>
                    <a class="login-form-forgot" class="login-form-forgot">忘记密码?</a>
                    <button nz-button class="login-form-button" [nzLoading]="isLoading" [nzType]="'primary'" [nzSize]="'large'">登录</button>
                    Or
                    <a href="">注册新账号!</a>
                </div>
                </div>
            </form>
        </ng-template>
    </nz-modal>
  `,
    styleUrls:['./style/style.css']
})
export class NzDemoModalAsyncComponent implements OnInit{
    constructor(private fb: FormBuilder,private router: Router, private route: ActivatedRoute) {
        console.info(this.fb)
        console.info(this.router)
      }
    validateForm: FormGroup;
    
      _submitForm() {
        for (const i in this.validateForm.controls) {
          this.validateForm.controls[ i ].markAsDirty();
        }
        this.login(this.router);    
      }

      isLoading = false;
      login =(router:Router)=>{
        this.isLoading = true;        
        setTimeout(_=> {  
            this.isLoading = false;          
            router.navigateByUrl("app");   
        }, 1500);
      }

      isVisible = false;
      isConfirmLoading = false;
      showModal = () => {
        console.info("showModal")
        this.isVisible = true;
      }
    
    
      handleCancel = (e:any) => {
        this.isVisible = false;
      }
      ngOnInit() {
        this.validateForm = this.fb.group({
          userName: [ null, [ Validators.required ] ],
          password: [ null, [ Validators.required ] ],
          remember: [ true ],
        });
      }    
}
