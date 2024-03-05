import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { InvoiceBloc } from 'src/app/modules/invoices/bloc/InvoiceBloc';
import { IInvoice } from 'src/app/core/interfaces/interfaces'; 

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  invoices?: IInvoice[];
  loading?: boolean;
  constructor(private invoiceBloc: InvoiceBloc) { }

  ngOnInit(): void {
    this.getInvoices();
  }
  async getInvoices(){
     this.loading = true;
     this.invoices = await firstValueFrom(this.invoiceBloc.getAll());
     this.loading = false;
  }
  delete(invoice: IInvoice){
    this.invoiceBloc.delete(invoice).subscribe(() => this.getInvoices());
  }
}
