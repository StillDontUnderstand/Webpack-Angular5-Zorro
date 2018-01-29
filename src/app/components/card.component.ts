import { Component } from '@angular/core';
@Component({
  selector: 'nz-demo-card-border',
  template: `
    <div style="background: #ECECEC;">
      <nz-card style="width:auto;" [nzBordered]="false">
        <ng-template #title>
          Card title
        </ng-template>
        <ng-template #extra>
          <a>More</a>
        </ng-template>
        <ng-template #body>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </ng-template>
      </nz-card>
    </div>

  `,
  styles  : []
})
export class NzDemoCardBorderComponent { }