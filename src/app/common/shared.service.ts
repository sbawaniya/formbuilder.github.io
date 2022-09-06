import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    private dataStream = new BehaviorSubject<any>(null);
    currentData = this.dataStream.asObservable()
    constructor() { }

    updateData(newData: any) {
        this.dataStream.next(newData);
    }
}
