import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';

const state = {
  token: localStorage.getItem('token') || null,
  user: null,
  loading: false,
  error: null,
  success: false,
};

export default createStore({
  state,
  mutations,
  actions,
});
