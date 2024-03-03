import { Injectable } from '@angular/core';
import { Bloc } from '../BaseBloc';
import { IMockData } from 'src/app/models/mockData.model';


let mockDataState!: IMockData;
type allowedEvents = "getMockData" | "getCurrentValue";
@Injectable({
    providedIn: 'root',
})
export class MockDataBloc extends Bloc<allowedEvents, IMockData>{
    constructor() {
        super(mockDataState);
    }
    override processEvent(event: allowedEvents): Map<allowedEvents, IMockData> {
        let eventsMap = new Map<allowedEvents, IMockData>();
        switch (event) {
            case "getMockData":
                break;
            case "getCurrentValue":
                break;
            default:
                break
        }
        return eventsMap
    }
}