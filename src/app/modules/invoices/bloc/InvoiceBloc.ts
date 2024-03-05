import { Injectable } from '@angular/core';
import { Bloc } from '../../../core/bloc/BaseBloc'; 
import { IInvoice, IUser } from 'src/app/core/interfaces/interfaces';
import { BehaviorSubject, Observable, of, tap } from 'rxjs'; 
import { InvoiceService } from 'src/app/modules/invoices/service/invoice.service';

 
@Injectable({
    providedIn: 'root',
})
export class InvoiceBloc extends Bloc<IInvoice[]>{  
   
    constructor(private invoiceService: InvoiceService) {
        super([]);
    }
    getAll(): Observable<IInvoice[]> {
        if(this.currentValue.length){
            return of(this.currentValue);
        }
        return  this.invoiceService.getInvoices().pipe(tap(invoices => this.emit(invoices)))
    }
    add(item: IUser[]): Observable<IUser[]> {
        throw new Error('Method not implemented.');
    }
    update(item: IUser[]): Observable<IUser[]> {
        throw new Error('Method not implemented.');
    }
    delete(invoice: IInvoice): Observable<boolean> {
       invoice.isDeleting = true;
       return this.invoiceService.deleteInvoice().pipe(tap(() => {
          const invoices = this.currentValue;
          this.emit(invoices.filter(i => i.id !== invoice.id)); 
       }))
    }   
}