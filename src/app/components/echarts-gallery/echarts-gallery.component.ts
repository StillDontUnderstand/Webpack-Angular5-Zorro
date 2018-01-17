import { Component, AfterViewInit } from '@angular/core'
@Component({
    template: `
        <div class="gallery" nz-row >
            <div nz-col [nzSpan]="6">
                <div>GALLERY</div>
            </div>
            <div nz-col [nzSpan]="6">
                <div>GALLERY</div>
            </div>
            <div nz-col [nzSpan]="6">
                <div>GALLERY</div>
            </div>
            <div nz-col [nzSpan]="6">
                <div>GALLERY</div>
            </div>
        </div>
        <div nz-row>
            <div nz-col [nzSpan] = "24">
                <pie></pie>        
            </div>
        </div>
    `,
    styles: [`
        :host {
            position: absolute;
            width: calc(100% - 32px);
            min-height: calc(100% - 48px);         
            box-shadow:0px 1px 11px 2px #00000059;
            background: #fff;
            margin: 16px 16px 30px 16px;
            z-index: 50;
            border-radius: 5px;
        }
        .gallery>div>div{
            height: 160px;
            margin: 25px;
            box-shadow: 0px 0px 6px 0px #000000b8;
            background-color: white;
            border-radius: 5px;
            transition:all 0.7s;
        }
        .gallery>div>div:hover{
            box-shadow: 0px 0px 12px 0px #000000b8;
        }
    `]
})

export class EChartsGalleryComponent implements AfterViewInit {

    ngAfterViewInit() {

    }
}