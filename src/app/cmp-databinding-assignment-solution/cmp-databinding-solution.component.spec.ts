import { TestBed} from '@angular/core/testing';
import { CmpDatabindingSolution } from './cmp-databinding-solution.component';


describe('CmpDatabindingSolution', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CmpDatabindingSolution
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app',(() => {
    const fixture = TestBed.createComponent(CmpDatabindingSolution);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`,(() => {
    const fixture = TestBed.createComponent(CmpDatabindingSolution);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag',(() => {
    const fixture = TestBed.createComponent(CmpDatabindingSolution);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
