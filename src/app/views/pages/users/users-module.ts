import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
]
@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [UserService],
})
export class UsersModule { }
