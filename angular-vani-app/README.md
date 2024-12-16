Angular Vani App

Este projeto é uma aplicação Angular divertida que demonstra conceitos avançados, como injeção de dependência, gerenciamento de estado com Redux, criação de diretivas personalizadas e design focado em performance. O objetivo principal é criar uma interface interativa que pergunta ao usuário: "Fui contratada?".

A interface possui três botões principais:

Sim: Ao clicar, exibe uma imagem indicando que você foi contratada. e um botão "Voltar".

Não: Este botão foge do mouse quando tenta-se clicar nele, criando uma interação divertida.

Voltar: Retorna à tela inicial para reiniciar a interação.

Estrutura do Projeto

O projeto está organizado em pastas para melhor modularização e organização do código:

src/app

componentes

main

Componente principal que organiza o layout da aplicação.

Exibe o componente PerguntaComponent.

Otimizado com ChangeDetectionStrategy.OnPush para melhorar a performance.

pergunta

Gerencia a lógica principal da aplicação.

Controla a exibição dos botões e da imagem ao ser contratada.

botao-sim

Componente que representa o botão "Sim".

botao-nao

Componente que representa o botão "Não".

Inclui a lógica de fuga através da diretiva RunawayDirective.

botao-voltar

Componente que representa o botão "Voltar".

Aparece ao clicar no botão "Sim" e retorna à tela inicial.

diretivas

runaway.directive.ts

Aplica o comportamento "fugir" ao botão "Não".

Reposiciona o botão aleatoriamente na tela ao passar o mouse sobre ele.

store

runaway.reducer.ts

Configuração inicial do estado com NgRx.

Os estilos estão distribuídos em arquivos SCSS dentro das pastas dos componentes correspondentes.

O estilo principal da aplicação é definido em main.component.scss.

Como Rodar o Projeto

Clone o repositório:

git clone https://github.com/vanilds/VaniSantos_Bradesco.git
cd angular-vani-app

Instale as dependências:

npm install

Rode o servidor de desenvolvimento:

ng serve

Acesse a aplicação no navegador em: http://localhost:4200

Demonstração

A aplicação exibe:

Uma pergunta no centro da tela: "Fui contratada?".

Dois botões: "Sim" e "Não".

Ao clicar em "Sim", uma imagem aparece confirmando a contrataçã.

Um botão "Voltar" é exibido, permitindo reiniciar a interaçãoo.

Ao tentar clicar em "Não", o botão se move para evitar o clique.

Melhorias Futuras

Adicionar animações ao botão "Não" para criar uma experiência mais fluida.

Melhorar a acessibilidade para garantir que todos os usuários possam interagir.

Internacionalização para suportar múltiplos idiomas.