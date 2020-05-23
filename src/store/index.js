import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

const { ipcRenderer } = window.require('electron');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    }
  },
  actions: {
    fetchNews({ commit }) {
      axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=84f2bbf63c7d4afe8419396d901fb246')
        .then(res => {
          console.log(res);
          commit("SET_NEWS", res);
        })
        .catch(() => console.log("failed"));
    },
    closeApp() {
      console.log('planning on closing!')
      // remote.getCurrentWindow.setFullScreen(true)
      ipcRenderer.send('close')
    }
  },
  modules: {
  }
})
