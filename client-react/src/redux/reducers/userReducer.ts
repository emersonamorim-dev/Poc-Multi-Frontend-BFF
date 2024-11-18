import { AnyAction } from 'redux';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
  User
} from '../actions/userActions';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    user: User;
    token: string;
  };
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: {
    user: User;
    token: string;
  };
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: string;
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  error: string;
}

export type UserAction =
  | LoginRequestAction
  | RegisterRequestAction
  | LoginSuccessAction
  | RegisterSuccessAction
  | LoginFailureAction
  | RegisterFailureAction;

export interface UserState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};


const userReducer = (state = initialState, action: AnyAction): UserState => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: (action as LoginSuccessAction | RegisterSuccessAction).payload.user,
        token: (action as LoginSuccessAction | RegisterSuccessAction).payload.token,
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: (action as LoginFailureAction | RegisterFailureAction).error,
      };
    default:
      return state;
  }
};

export default userReducer;

  