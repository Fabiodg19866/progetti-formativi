import { TestBed} from '@angular/core/testing';
import { BasicsDirectivesComponent } from './basics-directives.component';


describe('BasicsDirectivesComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
       BasicsDirectivesComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app',(() => {
    const fixture = TestBed.createComponent(BasicsDirectivesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`,(() => {
    const fixture = TestBed.createComponent(BasicsDirectivesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag',(() => {
    const fixture = TestBed.createComponent(BasicsDirectivesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
