# Documentação do Projeto

## Visão Geral
Este projeto é um aplicativo Angular desenvolvido para demonstração de funcionalidades específicas, como gerenciamento de estado com NgRx, interatividade com diretivas personalizadas, e uso de componentes modulares.

## Estrutura do Projeto
O projeto está estruturado seguindo práticas recomendadas do Angular:

- **src/app/components/**: Contém os componentes principais da aplicação, como botões e a página principal.
- **src/app/directives/**: Inclui diretivas personalizadas, como a `RunawayDirective`.
- **src/app/store/**: Gerencia o estado global usando NgRx.
- **src/assets/**: Contém imagens e recursos estáticos.

## Funcionalidades Principais

1. **Gerenciamento de Estado:** 
   - Usando NgRx para centralizar e gerenciar estados globais.
   - Exemplo: `runawayButtonReducer` para controlar interações do botão "runaway".

2. **Interatividade com Diretivas:**
   - A `RunawayDirective` move um botão para uma posição aleatória quando o mouse passa por cima dele.

3. **Componentes Modulares:**
   - Componentes reutilizáveis como botões "Sim", "Não" e "Voltar".

## Configuração e Execução

### Pré-requisitos
Certifique-se de ter instalado:
- Node.js (>= 14.x)
- Angular CLI (>= 15.x)

### Passos para Execução
1. Clone o repositório:
   ```bash
   git clone https://github.com/vanilds/VaniSantos_Bradesco.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd angular-vani-app
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

5. Acesse a aplicação no navegador em [http://localhost:4200](http://localhost:4200).

## Explicação do Código

### Diretiva `RunawayDirective`
Esta diretiva adiciona uma funcionalidade interativa ao botão, fazendo com que ele "fuja" do mouse.
```typescript
@Directive({
  selector: '[appRunaway]'
})
export class RunawayDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    const button = this.el.nativeElement;
    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;

    button.style.position = 'absolute';
    button.style.top = `${Math.random() * maxHeight}px`;
    button.style.left = `${Math.random() * maxWidth}px`;
  }
}
```
**Propósito:** Proporcionar uma experiência interativa e divertida ao usuário.

### Componente `MainComponent`
Este componente é o ponto central da aplicação, carregando a interface principal.
```typescript
@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {}
```
**Propósito:** Estruturar e exibir a interface principal da aplicação.

## Melhorias Futuras
- Implementar testes unitários para cobertura de código.
- Adicionar validações para melhorar a experiência do usuário.
- Internacionalização (i18n) para suporte a múltiplos idiomas.

---
Caso tenha dúvidas ou sugestões, sinta-se à vontade para contribuir!
Email: vani_santos2@hotmail.com
