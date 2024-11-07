import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDirectivesComponent } from './more-directives.component';

describe('MoreDirectivesComponent', () => {
  let component: MoreDirectivesComponent;
  let fixture: ComponentFixture<MoreDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
