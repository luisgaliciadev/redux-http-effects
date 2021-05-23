import { Injectable, Pipe } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usuariosActions from '../acctions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuariosService } from '../../services/usuarios.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        public _UsuariosService: UsuariosService
    ) {

    }
    @Effect({ })
    cargarUsuarios$ = this.actions$.pipe(
        ofType(usuariosActions.UsuariosActionTypes.CARGAR_USUARIOS)
    ).pipe(
        switchMap( () => {
            return this._UsuariosService.getUsers()
            .pipe(
                map( users => new usuariosActions.CargarUsuariosSuccess(users)),
                catchError( err => of(new usuariosActions.CargarUsuariosFail(err)))
            );
        })
    );
}