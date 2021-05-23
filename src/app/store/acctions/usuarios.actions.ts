import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';


export const  UsuariosActionTypes  =  { 
    CARGAR_USUARIOS: '[Usuarios] Cargar usuarios',
    CARGAR_USUARIOS_FAIL: '[Usuarios] Cargar usuarios fail',
    CARGAR_USUARIOS_SUCCESS: '[Usuarios] Cargar usuarios success'
};

export class CargarUsuarios implements Action {
    readonly type = UsuariosActionTypes.CARGAR_USUARIOS;
    constructor() {

    }
}

export class CargarUsuariosFail implements Action {
    readonly type = UsuariosActionTypes.CARGAR_USUARIOS_FAIL;
    constructor( public payload: any) {

    }
}

export class CargarUsuariosSuccess implements Action {
    readonly type = UsuariosActionTypes.CARGAR_USUARIOS_SUCCESS;
    constructor(public usuarios: Usuario[]) {
    }
}

export type usuariosAcciones = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;

