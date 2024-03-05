import { Component, OnInit } from '@angular/core';
import { InvoiceBloc } from 'src/app/modules/invoices/bloc/InvoiceBloc';
import { UserBloc } from 'src/app/modules/users/bloc/UserBloc';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  constructor(private userBloc: UserBloc, private invoicesBloc: InvoiceBloc) { }

  ngOnInit(): void {
  }

}
