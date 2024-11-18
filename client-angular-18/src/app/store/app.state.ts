import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './reducers/auth.reducer';
import { userReducer, UserState } from './reducers/user.reducer';

export interface AppState {
  user: UserState;
}

export interface AppState {
  auth: AuthState;  
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  user: userReducer
};
