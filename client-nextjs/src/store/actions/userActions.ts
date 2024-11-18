import { apiCall } from '../../utils/api'; 
import { AuthResponse, RegisterResponse } from '../types';
import { clearToken, setToken } from '../reducers/userReducer';
import { AppDispatch } from '..';


export const registerUser = (name: string, email: string, password: string) =>
  async (dispatch: AppDispatch): Promise<RegisterResponse> => {
    try {
      const registerResponse = await apiCall<RegisterResponse>('/register', {
        method: 'POST',
        data: { name, email, password },
      });

      if (!registerResponse) {
        throw new Error('Registro não foi bem-sucedido.');
      }

      console.log('Resposta do servidor ao registrar:', registerResponse);

      // Solicita o token após o registro
      const authResponse = await apiCall<{ token: string }>('/authenticate', {
        method: 'POST',
        data: { email, password },
      });

      if (authResponse && authResponse.token) {
        localStorage.setItem('token', authResponse.token);
        dispatch(setToken(authResponse.token));
        return registerResponse;
      } else {
        throw new Error('Token não encontrado na resposta de autenticação');
      }
    } catch (error) {
      console.error('Erro ao registrar ou autenticar usuário:', error);
      throw error;
    }
  };


export const loginUser = (email: string, password: string) => 
  async (dispatch: AppDispatch): Promise<AuthResponse> => {
    try {
      const response = await apiCall<AuthResponse>('/authenticate', {
        method: 'POST',
        data: { email, password },
      });

      // Verifica se a resposta contém o token
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        dispatch(setToken(response.token));
        return response;
      } else {
        throw new Error('Token não encontrado na resposta do login');
      }
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      throw error;
    }
  };


export const logoutUser = () => (dispatch: AppDispatch) => {
    localStorage.removeItem('token');
    dispatch(clearToken());
};