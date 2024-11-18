import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './mutationTypes';
import apiCall from '../utils/apiCall';

// Ação de registro
export const register = async ({ commit }, { name, email, password }) => {
  commit(REGISTER_REQUEST);
  try {
    const response = await apiCall('POST', 'http://localhost:3081/register', { name, email, password });
    commit(REGISTER_SUCCESS, response);
    localStorage.setItem('token', response.token);
  } catch (error) {
    commit(REGISTER_FAILURE, error.message);
  }
};

// Ação de login
export const login = async ({ commit }, { email, password }) => {
  commit(LOGIN_REQUEST);
  try {
    const response = await apiCall('POST', 'http://localhost:3081/authenticate', { email, password });
    if (response.token) {
      commit(LOGIN_SUCCESS, response); // Commit do token no estado
      localStorage.setItem('token', response.token);
    } else {
      throw new Error('Token não encontrado');
    }
  } catch (error) {
    commit(LOGIN_FAILURE, error.message);
  }
};


const actions = {
  register,
  login,
};

export default actions;
