import { createAction, props } from '@ngrx/store';


// Ações de registro
export const registerRequest = createAction(
  '[Auth] Register Request',
  props<{ name: string; email: string; password: string }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: any; token: string }>() 
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);

// Ações de login
export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any; token: string }>() 
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);
