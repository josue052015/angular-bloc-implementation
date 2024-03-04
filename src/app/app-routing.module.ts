import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "users", pathMatch: 'full'},
  { path: 'users', loadChildren: () => import('./views/pages/users/users-module').then(m => m.UsersModule) },
  { path: 'invoices', loadChildren: () => import('./views/pages/invoices/invoices-module').then(m => m.InvoicesModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
