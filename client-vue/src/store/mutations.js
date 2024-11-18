import { 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE 
  } from './mutationTypes';
  
  export default {
    // Mutations de registro
    [REGISTER_REQUEST](state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [REGISTER_SUCCESS](state, payload) {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.success = true;
      localStorage.setItem('token', payload.token); 
    },
    [REGISTER_FAILURE](state, error) {
      state.loading = false;
      state.error = error;
      state.success = false;
    },
  
    // Mutations de login
    [LOGIN_REQUEST](state) {
      state.loading = true;
      state.error = null;
    },
    [LOGIN_SUCCESS](state, payload) {
      state.loading = false;
      state.token = payload.token;
      state.user = payload.user;
      state.error = null;
      state.success = true;
      localStorage.setItem('token', payload.token); 
    },
    [LOGIN_FAILURE](state, error) {
      state.loading = false;
      state.error = error;
      state.success = false;
    },
  
    // Mutation para logout
    LOGOUT(state) {
      state.token = null;
      state.user = null;
      state.success = false;
      state.error = null;
      localStorage.removeItem('token'); 
    },
  };
  