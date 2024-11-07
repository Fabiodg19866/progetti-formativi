import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsDatabindingComponent } from './basics-databinding.component';

describe('BasicsDatabindingComponent', () => {
  let component: BasicsDatabindingComponent;
  let fixture: ComponentFixture<BasicsDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsDatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
