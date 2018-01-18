import { Component, Input } from '@angular/core';
@Component({
    selector: 'nz-demo-card-flex',
    template: `
    <nz-card>
      <ng-template #body>
        <div class="custom-image">
            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
        </div>
        <div class="custom-card">
          <h3>{{src.title}}</h3>
        </div>
      </ng-template>
    </nz-card>
  `,
    styles: [
        `
      :host ::ng-deep .custom-image img {
        display: block;
      }

      :host ::ng-deep .custom-card {
        padding: 10px 16px;
      }

      :host ::ng-deep .custom-card p {
        color: #999;
      }

      :host ::ng-deep .ant-card-body {
        padding: 0;
      }`
    ]
})
export class NzDemoCardFlexComponent {
    @Input() src: object;
    
    bodyStyle = { padding: 0 };
}