// Diretiva Runaway
// Esta diretiva reposiciona um botão aleatoriamente na tela sempre que o mouse entra em sua área.
// Ela calcula dinamicamente o espaço disponível para garantir que o botão permaneça dentro da área visível.
// import { Directive, ElementRef, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appRunaway]'
// })
// export class RunawayDirective {
//   constructor(private el: ElementRef) {}

//   @HostListener('mouseenter') onMouseEnter() {
//     // Obtém o elemento do botão e calcula o espaço disponível dentro da área visível
//     const button = this.el.nativeElement;
//     const maxWidth = window.innerWidth - button.offsetWidth;
//     const maxHeight = window.innerHeight - button.offsetHeight;

//     // Define posições aleatórias para o botão dentro das restrições da área visível
//     button.style.position = 'absolute';
//     button.style.top = `${Math.random() * maxHeight}px`;
//     button.style.left = `${Math.random() * maxWidth}px`;
//   }
//   //obs aqui foi pego um erro que o botão nao tinha um limite foi incluido no css uma position absolute para resolver esse problema 
// }

// directives/runaway.directive.ts
// directives/runaway.directive.ts
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRunaway]'
})
export class RunawayDirective {
  private moveCount = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.moveCount < 2) {
      const button = this.el.nativeElement;
      const simButton = document.querySelector('.sim');

      let top, left;
      const maxWidth = window.innerWidth - button.offsetWidth;
      const maxHeight = window.innerHeight - button.offsetHeight;

      // Garante que o botão "Não" não fique próximo do botão "Sim"
      do {
        top = Math.random() * maxHeight;
        left = Math.random() * maxWidth;
      } while (this.isTooClose(top, left, simButton));

      this.renderer.setStyle(button, 'position', 'absolute');
      this.renderer.setStyle(button, 'top', `${top}px`);
      this.renderer.setStyle(button, 'left', `${left}px`);

      this.moveCount++;
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Aqui Não clique no Sim :)');
    }
  }

  private isTooClose(top: number, left: number, simButton: Element | null): boolean {
    if (!simButton) return false;

    const simButtonRect = simButton.getBoundingClientRect();
    const distance = Math.sqrt(
      Math.pow(left - simButtonRect.left, 2) + Math.pow(top - simButtonRect.top, 2)
    );

    // Define uma distância mínima de 100 pixels
    return distance < 100;
  }
}

