import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    usuarios: reducers.UsuariosState;
    usuario: reducers.UsuarioState;
}

export const appReducers: ActionReducerMap<AppState, any> = {
    usuarios: reducers.usuariosReducer,
    usuario: reducers.usuarioReducer
}