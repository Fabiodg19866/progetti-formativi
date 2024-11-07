import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsSolution3Component } from './basics-solution3.component';

describe('BasicsSolution3Component', () => {
  let component: BasicsSolution3Component;
  let fixture: ComponentFixture<BasicsSolution3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsSolution3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsSolution3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
