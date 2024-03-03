import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IMockData } from '../models/mockData.model';
@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(private http: HttpClient) { }
  getData(): Observable<IMockData[]>{
   
    return of([{
      "name": "Dune",
      "lastName": "Frank Herbert",
      "age": 65
    },
    {
      "name": "Foundation",
      "lastName": "Isaac Asimov",
      "age": 72
    },
    {
      "name": "1984",
      "lastName": "George Orwell",
      "age": 47
    },
    {
      "name": "Brave New World",
      "lastName": "Aldous Huxley",
      "age": 58
    },
    {
      "name": "The Hitchhiker's Guide to the Galaxy",
      "lastName": "Douglas Adams",
      "age": 49
    }])
  }
}
