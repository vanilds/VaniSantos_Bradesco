import { Component } from '@angular/core';

@Component({
  selector: 'botao-sim',
  // existe duas formas de fazer essa leitura usando o template ou colocando a informação diretamente no html, esse e um projeto muito pequeno se fosse apenas isso continuaria aqui mesmo e excluiria o arquivo html pois nao esta sendo utilizado
  template: '<button class="sim">Sim</button>',
  styleUrls: ['./botao-sim.component.scss']
})
export class BotaoSimComponent {}