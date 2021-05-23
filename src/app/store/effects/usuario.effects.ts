import { Injectable, Pipe } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usuarioActions from '../acctions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuariosService } from '../../services/usuarios.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public _UsuariosService: UsuariosService
    ) {

    }
    @Effect({ })
    cargarUsuario$ = this.actions$.pipe(
        ofType(usuarioActions.UsuarioActionTypes.CARGAR_USUARIO)
    ).pipe(
        switchMap( (action: any) => {
            return this._UsuariosService.getUser(action.id)
            .pipe(
                map( users => new usuarioActions.CargarUsuarioSuccess(users)),
                catchError( err => of(new usuarioActions.CargarUsuarioFail(err)))
            );
        })
    );
}