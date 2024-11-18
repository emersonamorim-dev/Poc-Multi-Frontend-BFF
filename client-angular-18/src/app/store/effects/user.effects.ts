import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { registerRequest, registerSuccess, registerFailure, loginRequest, loginSuccess, loginFailure } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerRequest), 
      mergeMap(({ name, email, password }) =>
        this.userService.register(name, email, password).pipe(
          map((response) => {
            return registerSuccess({ payload: response });
          }),
          catchError((error) => {
            return of(registerFailure({ error: error.message || 'Erro ao tentar registrar.' }));
          })
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequest),  
      mergeMap(({ email, password }) =>
        this.userService.login(email, password).pipe(
          map((response) => {
            return loginSuccess({ payload: response });
          }),
          catchError((error) => {
            return of(loginFailure({ error: error.message || 'Erro ao tentar fazer login.' }));
          })
        )
      )
    )
  );
}
