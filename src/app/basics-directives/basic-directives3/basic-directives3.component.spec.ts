import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDirectives3Component } from './basic-directives3.component';

describe('BasicDirectives3Component', () => {
  let component: BasicDirectives3Component;
  let fixture: ComponentFixture<BasicDirectives3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDirectives3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDirectives3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
