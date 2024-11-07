import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFinalComponent } from './service-final.component';

describe('ServiceFinalComponent', () => {
  let component: ServiceFinalComponent;
  let fixture: ComponentFixture<ServiceFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
