import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector:'root-header',
    templateUrl:'header.html',
    styles:[`
        :host{
            z-index:100;
        }
        
        .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
    
            color: #53a4ff;
           
        }
        .ant-dropdown-menu-item-selected, .ant-dropdown-menu-submenu-title-selected, .ant-dropdown-menu-item-selected > a, .ant-dropdown-menu-submenu-title-selected > a {
            background-color: #ffffff00;
        }
    `]
})

export class HeaderComponent implements AfterViewInit{
    public avatarStyle = {
         "background-color": "rgb(64, 64, 64)",
        //  "box-shadow": "0px 0px 10px 1px #ffffff"
    }
    ngAfterViewInit(){

    }
    private UserOperate = function(){
        console.info("userOpserate")
    }
}