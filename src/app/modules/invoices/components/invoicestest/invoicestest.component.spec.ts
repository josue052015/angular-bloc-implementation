import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicestestComponent } from './invoicestest.component';

describe('InvoicestestComponent', () => {
  let component: InvoicestestComponent;
  let fixture: ComponentFixture<InvoicestestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicestestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicestestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
