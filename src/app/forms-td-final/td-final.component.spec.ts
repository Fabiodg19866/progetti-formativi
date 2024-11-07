import { TestBed } from '@angular/core/testing';
import { TdFinal } from './td-final.component';

describe('TdFinal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdFinal],
    });
    TestBed.compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TdFinal);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app works!'`, () => {
    const fixture = TestBed.createComponent(TdFinal);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(TdFinal);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  });
});
