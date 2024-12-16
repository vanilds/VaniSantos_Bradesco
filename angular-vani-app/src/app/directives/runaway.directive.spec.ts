import { RunawayDirective } from './runaway.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  template: `<button appRunaway>Runaway Button</button>`,
})
class TestComponent {}

describe('RunawayDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunawayDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new RunawayDirective(fixture.nativeElement);
    expect(directive).toBeTruthy();
  });

  it('should move the button on mouse enter', () => {
    const button = fixture.nativeElement.querySelector('button');
    const initialTop = button.style.top;
    const initialLeft = button.style.left;

    const event = new Event('mouseenter');
    button.dispatchEvent(event);

    expect(button.style.top).not.toBe(initialTop);
    expect(button.style.left).not.toBe(initialLeft);
  });
});
