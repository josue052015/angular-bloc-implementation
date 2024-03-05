import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs';
import { InvoiceBloc } from 'src/app/modules/invoices/bloc/InvoiceBloc';
import { UserBloc } from 'src/app/modules/users/bloc/UserBloc';
import { IInvoice, IUser } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  users: IUser[] = [];
  invoices: IInvoice[] = [];  
  constructor(public userBloc: UserBloc, public invoiceBloc: InvoiceBloc) { }

  async ngOnInit(){ 
    this.userBloc.getAll().subscribe();
    this.invoiceBloc.getAll().subscribe();
    this.userBloc.state$.subscribe(() =>{
      console.log("users has changed")
    })
  }
}
