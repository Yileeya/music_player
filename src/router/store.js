import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import qs from 'querystring';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: null,
    kkboxToken: '',
    AJAXConfig: null,
    readyMusic: {},
    metaTitle: '',
  },
  mutations: {
    KKBOXTOKEN(state, payload) {
      state.kkboxToken = payload;
    },
    AJAXCONFIG(state, payload) {
      state.AJAXConfig = payload;
    },
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    READYMUSIC(state, payload) {
      state.readyMusic = payload;
    },
    SETTITLE(state, payload) {
      state.metaTitle = payload;
    },
  },
  actions: {
    // async getToken(context) {
    //   const config = {
    //     headers: {
    //       Accept: 'application/x-www-form-urlencoded',
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   };
    //   const oauth = {
    //     grant_type: 'client_credentials',
    //     client_id: '32d6e6eed3e5c2da1c9b4c48fb2542b0',
    //     client_secret: 'a45b2b68c98164d6bc89f1dc4918e6f6'
    //   };
    //
    //   context.commit('LOADING', true);
    //   let res = await axios.post('/token', qs.stringify(oauth), config);
    //   context.commit('KKBOXTOKEN', res.data);
    //   const AJAXConfig = {
    //     headers: {
    //       Authorization: `${res.data.token_type} ${res.data.access_token}`,
    //     },
    //   };
    //   context.commit('AJAXCONFIG', AJAXConfig);
    //   context.commit('LOADING', false);
    // },


    async getToken(context) {
      // 註解為另一種 CORS 解法
      // const cors = 'https://cors-anywhere.herokuapp.com/';
      // const kkboxOauth = '/token';
      let oauthAPI = `https://cors-anywhere.herokuapp.com/${process.env.VUE_APP_KKBOXAUTH}`;
      if (process.env.NODE_ENV === 'development') {
        oauthAPI = '/token';
      }
      const config = {
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      /*臨時解決*/
        const oauth = {
          grant_type: 'client_credentials',
          client_id: '32d6e6eed3e5c2da1c9b4c48fb2542b0',
          client_secret: 'a45b2b68c98164d6bc89f1dc4918e6f6'
        };
        /**/
      context.commit('LOADING', true);
        let res = await axios.post(oauthAPI, qs.stringify(oauth), config);
        context.commit('KKBOXTOKEN', res.data);
        const AJAXConfig = {
          headers: {
            Authorization: `${res.data.token_type} ${res.data.access_token}`,
          },
        };
        context.commit('AJAXCONFIG', AJAXConfig);
        context.commit('LOADING', false);
    },











    getMetaTitle(context, title) {
      context.commit('SETTITLE', title);
    },
  },
  getters: {
    kkboxToken(state) {
      return state.kkboxToken;
    },
    isLoading(state) {
      return state.isLoading;
    },
    AJAXConfig(state) {
      return state.AJAXConfig;
    },
    readyMusic(state) {
      return state.readyMusic;
    },
    metaTitle(state) {
      return state.metaTitle;
    },
  },
  modules: {
  },
});
