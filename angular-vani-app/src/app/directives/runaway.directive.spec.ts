// import { RunawayDirective } from './runaway.directive';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Component } from '@angular/core';

// @Component({
//   template: `<button appRunaway>Runaway Button</button>`,
// })
// class TestComponent {}

// describe('RunawayDirective', () => {
//   let fixture: ComponentFixture<TestComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [RunawayDirective, TestComponent],
//     });
//     fixture = TestBed.createComponent(TestComponent);
//     fixture.detectChanges();
//   });

//   it('should create an instance', () => {
//     const directive = new RunawayDirective(fixture.nativeElement);
//     expect(directive).toBeTruthy();
//   });

//   it('should move the button on mouse enter', () => {
//     const button = fixture.nativeElement.querySelector('button');
//     const initialTop = button.style.top;
//     const initialLeft = button.style.left;

//     const event = new Event('mouseenter');
//     button.dispatchEvent(event);

//     expect(button.style.top).not.toBe(initialTop);
//     expect(button.style.left).not.toBe(initialLeft);
//   });
// });

// directives/runaway.directive.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RunawayDirective } from './runaway.directive';

@Component({
  template: '<button appRunaway class="test-button">Não</button>'
})
class TestComponent {}

describe('RunawayDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let buttonEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, RunawayDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    buttonEl = fixture.nativeElement.querySelector('.test-button');
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(buttonEl).toBeTruthy();
  });

  it('should move the button on mouse enter', () => {
    const initialTop = buttonEl.style.top;
    const initialLeft = buttonEl.style.left;

    // Simula o evento mouseenter
    buttonEl.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();

    const newTop = buttonEl.style.top;
    const newLeft = buttonEl.style.left;

    expect(newTop).not.toBe(initialTop);
    expect(newLeft).not.toBe(initialLeft);
  });

  it('should change button text to "Aqui Não clique no Sim :)" after 3 moves', () => {
    for (let i = 0; i < 3; i++) {
      buttonEl.dispatchEvent(new Event('mouseenter'));
      fixture.detectChanges();
    }

    expect(buttonEl.innerText).toBe('Aqui Não clique no Sim :)');
  });

  it('should not move the button after 2 moves', () => {
    for (let i = 0; i < 2; i++) {
      buttonEl.dispatchEvent(new Event('mouseenter'));
      fixture.detectChanges();
    }

    const finalTop = buttonEl.style.top;
    const finalLeft = buttonEl.style.left;

    buttonEl.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();

    expect(buttonEl.style.top).toBe(finalTop);
    expect(buttonEl.style.left).toBe(finalLeft);
  });
});

