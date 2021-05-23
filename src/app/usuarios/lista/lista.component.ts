import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';

import * as usuariosActions from '../../store/acctions'
import { AppState } from 'src/app/store/app.reducer';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading = false;
  error: any;

  constructor(
  
    private _Store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._Store.dispatch(new usuariosActions.CargarUsuarios());
    this._Store.select('usuarios').subscribe(
      usuarios => {
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
      }
    );
  }

}
