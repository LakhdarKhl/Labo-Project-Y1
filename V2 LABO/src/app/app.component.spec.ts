import { TestBed,fakeAsync, tick, async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app.routes';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`devrait afficher le titre H1 'inventory labo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('inventory-labo');
  });

  it('devrait afficher le h1 titre hello, inventory Labo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, inventory-labo');
  });

  describe('Routing tests', () => {
    let router:Router;

    beforeEach(() => {
      router = TestBed.inject(Router);
    });

    it('devrait naviguer vers "home"', fakeAsync(() => {
      router.navigate(['/home']).then(() => {
        expect(router.url).toEqual('/home');
      });
    }));

    it('devrait naviguer vers "register"', fakeAsync(() => {
      router.navigate(['/user/register']).then(() => {
        expect(router.url).toEqual('/user/register');
      });
    }));

    it('devrait naviguer vers "home"', fakeAsync(() => {
      router.navigate(['']).then(() => {
        expect(router.url).toEqual('/home');
      });
    }));
  });


});
