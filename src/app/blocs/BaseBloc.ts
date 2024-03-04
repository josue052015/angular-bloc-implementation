import {BehaviorSubject, Observable } from 'rxjs';

export abstract class Bloc<T> extends BehaviorSubject<T>{ 
  readonly state$: Observable<T> = this.asObservable();
  // override subject: BehaviorSubject<IInvoice[]> = new BehaviorSubject<IInvoice[]>([]);
  // readonly state$: Observable<IInvoice[]> = this.subject.asObservable();
  currentValue: T;
  constructor(state: T) {
    super(state);
    this.next(state);  
    this.currentValue = state;
  }
  
  emit(state: T){
    this.next(state);
    this.currentValue = state; 
  }
 
}