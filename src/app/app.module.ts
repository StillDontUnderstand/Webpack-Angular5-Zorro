import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//ng-antd
import { NgZorroAntdModule } from 'ng-zorro-antd';
//ng-dnd
import { DndModule } from 'ng2-dnd';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

//mock-data
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
//scroll animation
// import { NgsRevealModule } from 'ng-scrollreveal';


@NgModule({
  declarations: [
    AppComponent,
    // SmoothScrollToDirective，
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    //Ant-Design
    NgZorroAntdModule.forRoot(),
    //DragDrop
    DndModule.forRoot(),
    //Mock
    InMemoryWebApiModule.forRoot(
      InMemoryDataService,
      { delay: 200 }
    ),
    //Scroller-Animation
    // NgsRevealModule.forRoot(),
    AppRoutingModule
  ],
  exports: [
    DndModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}





