import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDirectives1Component } from './more-directives1.component';

describe('MoreDirectives1Component', () => {
  let component: MoreDirectives1Component;
  let fixture: ComponentFixture<MoreDirectives1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreDirectives1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDirectives1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
