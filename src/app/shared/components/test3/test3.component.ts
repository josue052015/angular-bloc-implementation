import { Component, OnInit } from '@angular/core';
import { InvoiceBloc } from 'src/app/modules/invoices/bloc/InvoiceBloc';
import { UserBloc } from 'src/app/modules/users/bloc/UserBloc';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component implements OnInit {

  constructor(private userBloc: UserBloc, private invoicesBloc: InvoiceBloc) { }

  ngOnInit(): void {
  }

}
