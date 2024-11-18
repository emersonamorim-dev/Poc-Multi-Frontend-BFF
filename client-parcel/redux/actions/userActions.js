import { apiCall } from '../../utils/api.js';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


export const login = (email, password) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        return apiCall('http://localhost:3081/authenticate', 'POST', { email, password })
            .then((data) => {
                dispatch({ type: LOGIN_SUCCESS, payload: data });

                localStorage.setItem('token', data.token);
            })
            .catch((error) => {
                dispatch({ type: LOGIN_FAILURE, error });
            });
    };
};


export const register = (name, email, password) => {
    return (dispatch) => {
        dispatch({ type: REGISTER_REQUEST });
        return apiCall('http://localhost:3081/register', 'POST', { name, email, password })
            .then((data) => {
                dispatch({ type: REGISTER_SUCCESS, payload: data });

                localStorage.setItem('token', data.token);
            })
            .catch((error) => {
                dispatch({ type: REGISTER_FAILURE, error });
            });
    };
};
