import Vue from 'vue'
import Vuex from 'vuex'
import API_KEY from '../config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gifs: [],
    pagination: {},
    query: '',
  },

  mutations: {
    
    SAVE_GIFS: function (state, payload) {
      state.gifs = payload.data;
      state.pagination = payload.pagination;
    },

    UPLOAD_GIFS: function (state, payload) {
      let data = payload.data;
      let newGifs = data.slice(state.gifs.length);
      state.gifs = state.gifs.concat(newGifs);
    },

    SET_QUERY: function (state, payload) {
      state.query = payload;
    }

  },

  actions: {
    
    GET_GIFS_FROM_API: async function (context, payload) {
      try {
        let data = await fetch(payload);
        let response = await data.json()
          .then(function (response) {
            if (response) {
              return response;
            }
          }
        );
        context.commit('SAVE_GIFS', response);
      } catch (e) {
        console.log(e);
      }
    },

    GET_GIFS_TO_UPDATE: async function (context) {
      let url = `https://api.giphy.com/v1/gifs/search?&api_key=${API_KEY}&q=${context.state.query}&limit=${context.state.gifs.length*2}`;
      try {
        let data = await fetch(url);
        let response = await data.json()
          .then(function (response) {
            if (response) {
              return response;
            }
          }
        );
        context.commit('UPLOAD_GIFS', response);
      } catch (e) {
        console.log(e);
        return null;
      }
    }

  },

  modules: {
  },

  getters: {

    GIFS: state => state.gifs,

    TOTAL_COUNT: state => state.pagination.total_count,

  }
  
})
