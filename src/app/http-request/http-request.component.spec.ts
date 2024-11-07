import { TestBed} from '@angular/core/testing';
import { HttpRequest } from './http-request.component';

describe('HttpRequest', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        HttpRequest
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HttpRequest);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-complete-guide-update'`, () => {
    const fixture = TestBed.createComponent(HttpRequest);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-complete-guide-update');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(HttpRequest);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-complete-guide-update!');
  });
});
