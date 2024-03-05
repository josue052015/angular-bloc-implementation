import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of} from 'rxjs';
import { IInvoice } from '../../../core/interfaces/interfaces';
import { mockData } from '../../../shared/mockData/mockData';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private mockData: mockData;
  constructor(private http: HttpClient) { 
    this.mockData = new mockData();
  }
  getInvoices(): Observable<IInvoice[]>{
    return of(this.mockData.getInvoices()).pipe(delay(3000))
  }
  deleteInvoice(): Observable<boolean>{
    return of(true).pipe(delay(1000))
  }
  updateInvoice(): Observable<IInvoice[]>{
    return of().pipe(delay(1000))
  }
}
