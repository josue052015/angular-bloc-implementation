import { Component, OnInit } from '@angular/core';
import { InvoiceBloc } from 'src/app/modules/invoices/bloc/InvoiceBloc';
import { UserBloc } from 'src/app/modules/users/bloc/UserBloc';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor(private userBloc: UserBloc, private invoicesBloc: InvoiceBloc) { }

  ngOnInit(): void {
  }

}
