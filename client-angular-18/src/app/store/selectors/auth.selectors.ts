import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated  
);

export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

export const selectLoginError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error  
);

export const selectLoginSuccess = createSelector(
  selectAuthState,
  (state: AuthState) => state.success  
);

export const selectSuccess = createSelector(
  selectAuthState,
  (state: AuthState) => state.user ? 'Cadastro realizado com sucesso!' : null
);

export const selectError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);
