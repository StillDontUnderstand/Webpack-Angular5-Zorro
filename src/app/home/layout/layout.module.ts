import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DndModule } from 'ng2-dnd';


import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';

import { NotFoundComponent } from './notFound.component';
import { DevlogComponent } from '../../pages/devlog/devlog.component'
import { HeaderComponent } from './header.component';
import { ContentComponent } from './content.component';

import { DragComponent } from '../../pages/drag/drag.component'
import { SimpleDndComponent } from '../../pages/drag/drag1.component'
import { SimpleDndHandleComponent } from '../../pages/drag/drag2.component'
import { ZoneDndComponent } from '../../pages/drag/drag3.component'
import { CustomDataDndComponent } from '../../pages/drag/drag4.component'
import { CustomFunctionDndComponent } from '../../pages/drag/drag5.component'
import { ShoppingBasketDndComponent } from '../../pages/drag/drag6.component'
import { SimpleSortableComponent } from '../../pages/drag/drag7.component'
import { SimpleSortableHandleComponent } from '../../pages/drag/drag8.component'
import { RecycleMultiSortableComponent } from '../../pages/drag/drag9.component'
import { SimpleSortableCopyComponent } from '../../pages/drag/drag10.component'
// import { CustomFunctionDndComponent } from '../../pages/drag/drag11.component'

console.info("layoutModule in running...")
@NgModule({
  declarations: [
    LayoutComponent,
    NotFoundComponent,
    DevlogComponent,
    HeaderComponent,
    ContentComponent,

    DragComponent,
    SimpleDndComponent,
    SimpleDndHandleComponent,
    ZoneDndComponent,
    CustomDataDndComponent,
    CustomFunctionDndComponent,
    ShoppingBasketDndComponent,
    SimpleSortableComponent,
    SimpleSortableHandleComponent,
    RecycleMultiSortableComponent,
    SimpleSortableCopyComponent

  ],
  exports: [LayoutComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgZorroAntdModule,
    DndModule,
    //不允许重复注入
    // BrowserAnimationsModule,
    //路由单独注入的情况，注意先后顺序
    // DevlogModule,
    LayoutRoutingModule,
  ],
})
export class LayoutModule {

}