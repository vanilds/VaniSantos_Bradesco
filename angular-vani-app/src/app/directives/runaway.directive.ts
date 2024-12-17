import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRunaway]'
})
export class RunawayDirective {
  private moveCount = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    //     // Obtém o elemento do botão e calcula o espaço disponível dentro da área visível, ele conta ate dois movimentos se for maior que dois ele troca o label para Aqui Não clique no Sim :)

    if (this.moveCount < 2) {

      const button = this.el.nativeElement;
      const simButton = document.querySelector('.sim');

      let top, left;
      const maxWidth = window.innerWidth - button.offsetWidth;
      const maxHeight = window.innerHeight - button.offsetHeight;

      // Garante que o botão "Não" não fique próximo do botão "Sim" e define posições aleatórias para o botão dentro das restrições da área visível
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

//obs aqui foi pego um erro que o botão nao tinha um limite foi incluido no css uma position absolute para resolver esse problema 


