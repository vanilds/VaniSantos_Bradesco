import { Component } from '@angular/core';

@Component({
  selector: 'pergunta-component',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.scss']
})
export class PerguntaComponent {
  contratada = false;

  onSimClick() {
    this.contratada = true;
  }

  onVoltarClick() {
    this.contratada = false;
  }
}