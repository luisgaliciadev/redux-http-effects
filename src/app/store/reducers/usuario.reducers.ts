import { Usuario } from '../../models/usuario.model';
import * as fromUsuario from '../acctions/usuario.actions'


export interface UsuarioState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsuarioState = {
    user: {id: 0, email: '', first_name: '', last_name: '', avatar: ''},
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer(state = initState, action: fromUsuario.usuarioAcciones | any): UsuarioState {
    switch (action.type) {

        case fromUsuario.UsuarioActionTypes.CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuario.UsuarioActionTypes.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: {...action.usuario}
            }

        case fromUsuario.UsuarioActionTypes.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            }

        default:
            return state
    }
}