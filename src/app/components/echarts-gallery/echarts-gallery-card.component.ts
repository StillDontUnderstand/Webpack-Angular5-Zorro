import { Component, Input } from '@angular/core';
@Component({
    selector: 'nz-demo-card-flex',
    template: `
    <a routerLink={{src.link}} routerLinkActive="active">
        <nz-card>
        <ng-template #body>
            <div class="custom-image">
                <img  [src]="pie"/>
            </div>
            <div class="custom-card">
            <h3>{{src.title}}</h3>
            </div>
        </ng-template>
        </nz-card>
    </a>
  `,
    styles: [
        `
      :host ::ng-deep .custom-image img {
        display: block;
        height:100px;
        width="100%"
      }

      :host ::ng-deep .custom-card {
        padding: 10px 16px;
      }

      :host ::ng-deep .custom-card p {
        color: #999;
        text-align: center;        
      }

      :host ::ng-deep .ant-card-body {
        padding: 0;
      }`
    ]
})
export class NzDemoCardFlexComponent {
    @Input() src: object;
    public pie = require('./pie.png')    
    bodyStyle = { padding: 0 };
}