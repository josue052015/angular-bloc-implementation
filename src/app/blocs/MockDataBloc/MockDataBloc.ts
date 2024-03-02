import { Injectable } from '@angular/core';
import { Bloc } from '../BaseBloc';
import { IMockData } from 'src/app/models/mockData.model';
import { GetCurrentValue, GetMockData, MockDataEvent } from './MockDataEvents';

let mockDataState!: IMockData;

@Injectable({
    providedIn: 'root',
})
export class MockDataBloc extends Bloc<MockDataEvent, IMockData>{
    constructor() {
        super(mockDataState);
    }
    override processEvent(event: MockDataEvent): Map<MockDataEvent, IMockData> {
        let eventsMap = new Map<MockDataEvent, IMockData>();
        if (event instanceof GetMockData) {
            
        }
        else if (event instanceof GetCurrentValue) {

        }
        return eventsMap
    }
}