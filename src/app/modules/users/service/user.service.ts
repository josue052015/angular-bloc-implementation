import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mockData } from '../../../shared/mockData/mockData';
import { Observable, delay, of } from 'rxjs';
import { IUser } from '../../../core/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private mockData: mockData;
  constructor(private http: HttpClient) { 
    this.mockData = new mockData();
  }
  getUsers(): Observable<IUser[]>{
    return of(this.mockData.getUsers()).pipe(delay(1000))
  }
  deleteUser(): Observable<boolean>{
    return of(true).pipe(delay(1000))
  }
  updateUser(): Observable<IUser[]>{
    return of().pipe(delay(1000))
  }
}
