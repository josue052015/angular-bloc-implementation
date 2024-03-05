import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserBloc } from 'src/app/modules/users/bloc/UserBloc';
import { IUser } from 'src/app/core/interfaces/interfaces'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users?: IUser[];
  loading?: boolean;
  constructor(private userBloc: UserBloc) { }

  ngOnInit(): void {
    this.getUsers();
  }
  async getUsers() {
    this.loading = true;
    this.users = await firstValueFrom(this.userBloc.getAll());
    this.loading = false;
  }
  delete(user: IUser){
    this.userBloc.delete(user).subscribe(() => this.getUsers());
  }
}
