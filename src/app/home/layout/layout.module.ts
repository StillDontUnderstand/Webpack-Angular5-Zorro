import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DndModule } from 'ng2-dnd';


import { LayoutRoutingModule } from './layout.routing';
import { LayoutComponent } from './layout.component';

import { NotFoundComponent } from './notFound.component';
import { DevlogComponent } from '../../components/devlog/devlog.component'
import { HeaderComponent } from './header.component';
import { ContentComponent } from './content.component';

import { DragComponent } from '../../components/drag/drag.component'
import { SimpleDndComponent } from '../../components/drag/drag1.component'
import { SimpleDndHandleComponent } from '../../components/drag/drag2.component'
import { ZoneDndComponent } from '../../components/drag/drag3.component'
import { CustomDataDndComponent } from '../../components/drag/drag4.component'
import { CustomFunctionDndComponent } from '../../components/drag/drag5.component'
import { ShoppingBasketDndComponent } from '../../components/drag/drag6.component'
import { SimpleSortableComponent } from '../../components/drag/drag7.component'
import { SimpleSortableHandleComponent } from '../../components/drag/drag8.component'
import { RecycleMultiSortableComponent } from '../../components/drag/drag9.component'
import { SimpleSortableCopyComponent } from '../../components/drag/drag10.component'
// import { CustomFunctionDndComponent } from '../../components/drag/drag11.component'

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