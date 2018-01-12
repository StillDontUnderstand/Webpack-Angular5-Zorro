import { Component, OnInit } from '@angular/core';
// import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


@Component({
    // selector: 'varible',
    templateUrl: './varible.component.html',
    // styleUrls:['']
})
export class VaribleComponent implements OnInit {
  
    ngOnInit() {
        // this.service.getHeroes(0).subscribe((data) => this.data = data)
        // this.httpTest();
        // console.info(this.route.routeConfig);    
        // this.httpTest(this.route.paramMap);
        
    }
}