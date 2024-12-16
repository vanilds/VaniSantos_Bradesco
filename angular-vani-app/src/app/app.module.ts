import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { PerguntaComponent } from './components/pergunta/pergunta.component';
import { BotaoSimComponent } from './components/botao-sim/botao-sim.component';
import { BotaoNaoComponent } from './components/botao-nao/botao-nao.component';
import { BotaoVoltarComponent } from './components/botao-voltar/botao-voltar.component';
import { runawayButtonReducer } from './store/reducers/runaway.reducer';
import { RunawayDirective } from './directives/runaway.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PerguntaComponent,
    BotaoSimComponent,
    BotaoNaoComponent,
    BotaoVoltarComponent,
    RunawayDirective
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ runaway: runawayButtonReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}