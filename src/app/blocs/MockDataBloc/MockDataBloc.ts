import { Injectable } from '@angular/core';
import { Bloc } from '../BaseBloc';
import { IMockData } from 'src/app/models/mockData.model';
import { MockDataService } from 'src/app/services/mock-data.service';


let mockDataState!: IMockData[];
type allowedEvents = "getMockData";
@Injectable({
    providedIn: 'root',
})
export class MockDataBloc extends Bloc<allowedEvents, IMockData[]>{
    constructor(private mockDataService: MockDataService) {
        super(mockDataState);
    }
    override processEvent(event: allowedEvents): Map<allowedEvents, IMockData[]> {
        let eventsMap = new Map<allowedEvents, IMockData[]>();
        switch (event) {
            case "getMockData":
                this.mockDataService.getData().subscribe(data => {
                    this.emitState(data)
                })
                break;
            default:
                break
        }
        return eventsMap
    }
}