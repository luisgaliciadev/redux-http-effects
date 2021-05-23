import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';


export const  UsuarioActionTypes  =  { 
    CARGAR_USUARIO: '[Usuario] Cargar usuario',
    CARGAR_USUARIO_FAIL: '[Usuario] Cargar usuario fail',
    CARGAR_USUARIO_SUCCESS: '[Usuario] Cargar usuario success'
};

export class CargarUsuario implements Action {
    readonly type = UsuarioActionTypes.CARGAR_USUARIO;
    constructor( public id: string) {

    }
}

export class CargarUsuarioFail implements Action {
    readonly type = UsuarioActionTypes.CARGAR_USUARIO_FAIL;
    constructor( public payload: any) {

    }
}

export class CargarUsuarioSuccess implements Action {
    readonly type = UsuarioActionTypes.CARGAR_USUARIO_SUCCESS;
    constructor(public usuario: Usuario) {
    }
}

export type usuarioAcciones = CargarUsuario | CargarUsuarioFail | CargarUsuarioSuccess;

