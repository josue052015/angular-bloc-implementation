import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UsersComponent } from './components/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/modules/users/service/user.service';
import { InvoicesComponent } from '../invoices/invoices.component';
import { InvoicesModule } from '../invoices/invoices-module';
import { InvoicetestModule } from '../invoices/components/invoicestest/invoicetest.module';
 
const routes: Routes = [
  { path: '', loadChildren: () => import('./components/users/users2.module').then(m => m.Users2Module) }, 
  
]
@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule, 
    InvoicetestModule
  ],
  providers: [UserService],
})
export class UsersModule { }
