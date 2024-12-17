// Reducer Runaway
// Este reducer gerencia o estado para o recurso de botão "runaway".
// Atualmente, ele é inicializado com um valor booleano padrão, mas pode ser expandido para funcionalidades adicionais.
import { createReducer } from '@ngrx/store';

export const initialState = false; // Estado inicial que representa se o botão está habilitado para "runaway"

export const runawayButtonReducer = createReducer(
  initialState
  // Futuras alterações de estado e ações podem ser adicionadas aqui caso o aplicativo venha a crescer
);