import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsComponentsComponent } from './basics-components.component';

describe('BasicsComponentsComponent', () => {
  let component: BasicsComponentsComponent;
  let fixture: ComponentFixture<BasicsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
