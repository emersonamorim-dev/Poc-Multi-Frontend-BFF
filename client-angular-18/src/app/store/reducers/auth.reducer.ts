import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure, registerSuccess, registerFailure } from '../actions/auth.actions';

export interface AuthState {
  user: any | null;
  error: string | null;
  success: string | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  user: null,
  error: null,   
  success: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    success: 'Login bem-sucedido!',
    error: null,  
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,  
    isAuthenticated: false,
    success: null,
  })),
  on(registerSuccess, (state, { user }) => ({
    ...state,
    user,
    success: 'Cadastro realizado com sucesso!',
    error: null,
    isAuthenticated: true,
  })),
  on(registerFailure, (state, { error }) => ({
    ...state,
    error,  
    success: null,
    isAuthenticated: false,
  }))
);
