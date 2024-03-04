import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent
  },
]
@NgModule({
  declarations: [
    InvoicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [InvoicesModule],
})
export class InvoicesModule { }
