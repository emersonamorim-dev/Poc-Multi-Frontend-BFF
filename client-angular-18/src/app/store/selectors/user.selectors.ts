import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');


export const selectError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);


export const selectUserToken = createSelector(
  selectUserState,
  (state: UserState) => state.token
);


export const selectIsAuthenticated = createSelector(
  selectUserState,
  (state: UserState) => !!state.token  
);


export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);


export const selectRegisterSuccess = createSelector(
  selectUserState,
  (state: UserState) => state.registerSuccess
);


export const selectRegisterError = createSelector(
  selectUserState,
  (state: UserState) => state.registerError
);


export const selectUserLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);
