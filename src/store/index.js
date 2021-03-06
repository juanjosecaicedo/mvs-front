import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import keys from '../keys'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarios: {},
    is_auth: null,
    loading: false
  },
  mutations: {
    async login(state, user) {
      state.loading = true;
      state.is_auth = null;
      await axios.post(`${keys.baseUrl}login`, user).then(response => {
        state.usuarios = response.data;
        if (response.data.id) {
          localStorage.setItem('session', JSON.stringify(state.usuarios));
          state.is_auth = true;
          state.loading = false;
        } else {
          state.is_auth = false;
          state.loading = false;
        }
      })
    },
    checkAuth(state, user) {
      state.usuarios = user;
      if (user.id) {
        state.is_auth = true;
      }
    },
    cerrarSesion(state, user) {
      state.usuarios = user,
        state.is_auth = null;
      if (localStorage.getItem('session')) {
        localStorage.removeItem('session');
      }
    }
  },
  actions: {},

  modules: {}
})