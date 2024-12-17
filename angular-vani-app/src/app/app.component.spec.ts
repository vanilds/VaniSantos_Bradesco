import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent, // Inclua aqui o componente usado no template
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Opcional para evitar erros com outros elementos personalizados
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-vani-app'`, () => {
    expect(component.title).toEqual('angular-vani-app');
  });

  it('should render the main component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main-component')).toBeTruthy();
  });
});
