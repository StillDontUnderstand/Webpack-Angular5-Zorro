import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()
export class DataService {
    constructor(private _notification: NzNotificationService) { }
    
    private data: any;
    private notification:any;
    private subject: Subject<any> = new Subject<any>();

    setData(data: any): void {
        this.data = data;
        this.subject.next(data);
    }

    getData(): Observable<any> {
        return this.subject.asObservable();
    }
}