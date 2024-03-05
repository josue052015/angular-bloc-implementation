import { Injectable } from '@angular/core';
import { Bloc } from '../../../core/bloc/BaseBloc'; 
import { IUser } from 'src/app/core/interfaces/interfaces';
import { BehaviorSubject, Observable, Subject, of, tap } from 'rxjs';
import { UserService } from 'src/app/modules/users/service/user.service';

 
@Injectable({
    providedIn: 'root',
})
export class UserBloc extends Bloc<IUser[]>{ 
    // override subject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
    // readonly state$: Observable<IUser[]> = this.subject.asObservable();
    usuarios?: IUser[];
    constructor(private userService: UserService) {
        super([]); 
    }
    getAll(): Observable<IUser[]> {
        if(this.currentValue.length > 0){  
            return of(this.currentValue);
        } 
        return this.userService.getUsers().pipe(tap(users => this.emit(users)))
    }
    add(item: IUser[]): Observable<IUser[]> {
        throw new Error('Method not implemented.');
    }
    
    update(item: IUser[]): Observable<IUser[]> {
        throw new Error('Method not implemented.');
    }
    delete(user: IUser): Observable<boolean> { 
       user.isDeleting = true;
       return this.userService.deleteUser().pipe(tap(() => {
          const users = this.currentValue;
          this.emit(users.filter(u => u.id !== user.id));  
       }))
    }  
    
}