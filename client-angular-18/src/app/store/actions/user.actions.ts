import { createAction, props } from '@ngrx/store';
import { AuthPayload } from '../../models/user.model';

// Ações de Login
export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ payload: AuthPayload }>() 
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

// Ações de Registro
export const registerRequest = createAction(
  '[Auth] Register Request',
  props<{ name: string; email: string; password: string }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ payload: AuthPayload }>() 
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);

// Ação de Logout
export const logout = createAction('[Auth] Logout');

