import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { CargarUsuario } from '../../store/acctions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {
  user: Usuario = {id: 0, last_name: '', first_name: '', avatar: '', email: ''};
  loading = false;
  error: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(
      (params => {
        let id = params['id'];
        this._Store.dispatch(new CargarUsuario(id));
      })
    );

    this._Store.select('usuario').subscribe(
      (usuario => {
        this.user = usuario.user;
        this.loading = usuario.loading;
        this.error = usuario.error;
      })
    );
  }

}
