import { Dispatch } from 'redux';
import { apiCall } from '../../utils/api';
import { AppThunk } from '../../redux/store'; 

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthPayload {
  user: User;
  token: string;
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: AuthPayload;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: string;
}

interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: AuthPayload;
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  error: string;
}

export type UserActions =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailureAction;


export const login = (email: string, password: string): AppThunk => {
  return async (dispatch: Dispatch<UserActions>): Promise<void> => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      const data = await apiCall<AuthPayload>('http://localhost:3081/authenticate', 'POST', { email, password });

      // Verifica se a resposta contém um token
      if (data && data.token) {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        localStorage.setItem('token', data.token);
      } else {
        throw new Error('Token não encontrado');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Erro no login:', error.message);
        dispatch({ type: LOGIN_FAILURE, error: error.message });
      } else {
        console.error('Erro desconhecido:', error);
        dispatch({ type: LOGIN_FAILURE, error: 'Erro desconhecido ao autenticar.' });
      }
    }
  };
};


export const register = (name: string, email: string, password: string): AppThunk => {
  return async (dispatch: Dispatch<UserActions>): Promise<void> => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const data = await apiCall<AuthPayload>('http://localhost:3081/register', 'POST', { name, email, password });
      dispatch({ type: REGISTER_SUCCESS, payload: data });
      localStorage.setItem('token', data.token);
    } catch (error) {
      dispatch({ type: REGISTER_FAILURE, error: error as string });
    }
  };
};
