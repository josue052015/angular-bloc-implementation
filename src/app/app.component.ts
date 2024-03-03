import { Component, OnInit } from '@angular/core';
import { MockDataBloc } from './blocs/MockDataBloc/MockDataBloc';
import { IMockData } from './models/mockData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bloc-app';
  mockData!: IMockData[]
  constructor(private bloc: MockDataBloc) {

  }
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.bloc.addState("getMockData")
    this.bloc.subscribe(data => {
      this.mockData = data
    })
  }
}
