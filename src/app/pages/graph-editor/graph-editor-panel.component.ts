import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'nz-demo-form-dynamic',
  template: `
  <form nz-form [formGroup]="validateForm" (ngSubmit)="_submitForm()">
    <div nz-form-item nz-row *ngFor="let control of controlArray;let i = index">
      <div nz-form-control nz-col [nzSpan]="20" [nzOffset]="4">
        <nz-input
          style="width: 60%; margin-right:8px;"
          [nzSize]="'large'"
          [nzPlaceHolder]="'placeholder'"
          [formControlName]="control.controlInstance"
          [nzId]="control.id">
        </nz-input>
        <i class="anticon anticon-minus-circle-o dynamic-delete-button" (click)="removeField(control,$event)"></i>
        <div nz-form-explain
          *ngIf="getFormControl(control.controlInstance)?.dirty&&getFormControl(control.controlInstance)?.hasError('required')">
          Please input passenger's name.
        </div>
      </div>
    </div>
    <div nz-form-item nz-row>
      <div nz-form-control nz-col [nzSpan]="20" [nzOffset]="4">
        <button nz-button [nzType]="'dashed'" [nzSize]="'large'" style="width:60%" (click)="addField($event)" nzGhost>
          <i class="anticon anticon-plus"></i>
          <span> Add field</span>
        </button>
      </div>
    </div>
    <div nz-form-item nz-row>
      <div nz-form-control nz-col [nzSpan]="20" [nzOffset]="4">
        <button nz-button [nzType]="'primary'" [nzSize]="'large'" nzGhost>Submit</button>
      </div>
    </div>
  </form>
  <button nz-button [nzType]="'primary'" [nzSize]="'large'" nzGhost (click)="cancel();">Cancel</button>
  
  `,

  styles: [
    `
      .dynamic-delete-button {
        cursor: pointer;
        position: relative;
        top: 4px;
        font-size: 24px;
        color: #999;
        transition: all .3s;
      }
      .ant-input {
        background-color:transparent ! important;
        border:1px solid black ! important;
      }
    `
  ]
})
export class NzDemoFormDynamicComponent implements OnInit {
  @Output() cancelEvent= new EventEmitter();
  validateForm: FormGroup;
  controlArray = [];

  cancel = ()=>{
    console.info("cancel")
    this.cancelEvent.emit('eventDesc');
  }
  addField(e?: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    const id = (this.controlArray.length > 0) ? this.controlArray[this.controlArray.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`
    };
    const index = this.controlArray.push(control);
    console.log(this.controlArray[this.controlArray.length - 1]);
    this.validateForm.addControl(this.controlArray[index - 1].controlInstance, new FormControl(null, Validators.required));
  }

  removeField(i, e: MouseEvent) {
    e.preventDefault();
    if (this.controlArray.length > 1) {
      const index = this.controlArray.indexOf(i);
      this.controlArray.splice(index, 1);
      console.log(this.controlArray);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({});
    this.addField();
  }
}