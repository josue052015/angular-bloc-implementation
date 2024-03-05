import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "users", pathMatch: 'full'},
  { path: 'users', loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule) },
  { path: 'invoices', loadChildren: () => import('./modules/invoices/invoices-module').then(m => m.InvoicesModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
