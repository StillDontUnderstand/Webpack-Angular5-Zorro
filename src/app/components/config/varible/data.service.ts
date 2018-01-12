import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
@Injectable()
export class DataService {
    constructor(private http:Http){}
    data:any
    getHeroes(id:number): Observable<any> {
         console.info(id)
        return this.http.get('api/data')
        // .subscribe(data => {
        //     // console.info(data.json());
        //     this.data = data.json()
        //   })
        // return of(this.data);
      }
}    