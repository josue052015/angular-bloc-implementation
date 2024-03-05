import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { InvoicetestModule } from 'src/app/modules/invoices/components/invoicestest/invoicetest.module';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
]

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule, 
    InvoicetestModule
  ]
})
export class Users2Module { }
