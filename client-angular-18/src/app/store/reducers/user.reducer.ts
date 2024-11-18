import { createReducer, on } from '@ngrx/store';
import { 
  registerRequest, registerSuccess, registerFailure,
  loginRequest, loginSuccess, loginFailure,
  logout
} from '../actions/user.actions';

interface AuthPayload {
  token: string;
  user: any; 
}

export interface UserState {
  token: string | null;
  user: any | null;
  error: string | null;
  loading: boolean;
  registerSuccess: boolean;
  registerError: string | null;
}

const initialState: UserState = {
  token: null,
  user: null,
  error: null,
  loading: false,
  registerSuccess: false,
  registerError: null,
};

export const userReducer = createReducer(
  initialState,

  on(registerRequest, (state) => ({
    ...state,
    loading: true,
    registerError: null,
  })),


  on(registerSuccess, (state, { payload }: { payload: AuthPayload }) => ({
    ...state,
    loading: false,
    token: payload.token,
    user: payload.user,
    registerSuccess: true,
    registerError: null,
  })),

  on(registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    registerSuccess: false,
    registerError: error,
  })),

 
  on(loginRequest, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loginSuccess, (state, { payload }: { payload: AuthPayload }) => ({
    ...state,
    loading: false,
    token: payload.token,
    user: payload.user,
    error: null,
  })),


  on(loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),


  on(logout, () => initialState)
);
