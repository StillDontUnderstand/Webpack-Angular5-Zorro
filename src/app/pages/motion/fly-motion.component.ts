import { Component, style } from '@angular/core';
import { flyInOut } from '../../animations/fly.animation'
import { listFlyInOut } from '../../animations/fly.animation'
@Component({
    selector: 'fly-motion',
    template: `
    <div nz-row [nzGutter]='8'>
        <div nz-col [nzSpan]='12'>
            <button nz-button [nzSize]="'small'" (click)="toggle()" [nzLoading]="isLoadingOne">
                <span>Show / Hide Items</span>
            </button>
            <ul [@listFlyInOut]="items.length" >
                <li *ngFor="let item of items" >
                    {{ item }}
                </li>
            </ul>
        </div>
        <div nz-col [nzSpan]='12'>
            <button nz-button [nzSize]="'small'" (click)="add()">Add Items</button>
            <ul>
                <li *ngFor="let item of items1" [@flyInOut]="items1.length">
                    {{ item }}
                    <a (click)='remove(item)'>remove</a>
                </li>
            </ul>
        </div>
    </div>
    `,
    animations: [flyInOut, listFlyInOut],
    styles: [`
    :host{
        padding:20px;
    }
    li{
        text-align:center;
        margin:5px;
        border:1px solid #ccc;
        border-radius:5px;
        box-shadow:0px 0px 0px 0px black;
    }
    div div{
        marging:10px;
        padding:10px;
        border-radius:5px;
        height: 200px;
    }
    li a{
        float:right;
    }
    `]
})

export class FlyMotionComponent {
    items = [];
    items1 = [];
    isLoadingOne = false;

    showItems() {
        this.items = [0, 1, 2, 3, 4, 5, 6];
    }

    hideItems() {
        this.items = [];
    }

    toggle() {
        this.items.length ? this.hideItems() : this.showItems();
        this.isLoadingOne = true;
        const timer = setTimeout(_ => {
            this.isLoadingOne = false;
        }, 2450);
    }

    add() {
        if (this.items1.length >= 7) return
        const r = Math.floor(Math.random() * 1000)
        this.items1.push(r);
    }
    remove(item) {
        const index = this.items1.indexOf(item);
        console.info(index);
        this.items1.splice(index, 1);
    }
}