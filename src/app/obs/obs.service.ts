import { Injectable } from '@angular/core';
import { Observable, Subject , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsService {
  
  subject = new Subject<number>();
  obj = new Observable();
  Beha = new BehaviorSubject(0);
  constructor() { }

  getSubject() : Observable<any> {
  return this.subject.asObservable();
}

setObservable(value: any) {
  this.subject.next(value);
}

obser(): Observable<any> {

  const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  return observable;
}

}
