import { Routes } from '@angular/router';
// 声明组件
import {WelcomeModule} from '../home/welcome/welcome.module';
import {LayoutModule } from '../home/layout/layout.module';

// 定义二级路由
export const Second_Router : Routes = [
    {
        'path': 'mb-cc',
        'loadChildren': '../home/mb-cc/mb-cc.module#MbCcModule' 
    },
    {
        'path': 'demo2',
        'loadChildren': '../home/demo2/demo2.module#Demo2Module'
    } 
];


// 定义一级路由
export const Main_Router : Routes= [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    {
        'path': 'welcome',
        'loadChildren': '../home/welcome/welcome.module#WelcomeModule' 
    },
    {
        'path': 'app',
        'loadChildren': '../home/layout/layout.module#LayoutModule'
    } 
];





