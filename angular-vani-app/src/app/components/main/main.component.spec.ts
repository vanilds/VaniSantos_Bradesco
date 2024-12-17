import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { PerguntaComponent } from '../pergunta/pergunta.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, PerguntaComponent], // Adicione todos os componentes necessários
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Opcional: Para ignorar Web Components ou elementos desconhecidos
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('img.logo');
    expect(logo).toBeTruthy();
    expect(logo?.getAttribute('src')).toBe('assets/bra_main.png');
  });
});
