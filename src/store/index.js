import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

// const { ipcRenderer } = window.require('electron');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    country: 'us',
    apiKey: '84f2bbf63c7d4afe8419396d901fb246'
  },
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    }
  },
  actions: {
    fetchNews({ commit }) {
      axios(`https://newsapi.org/v2/top-headlines?country=${this.$store.state.country}&apiKey=${this.$store.state.apiKey}`)
        .then(res => {
          console.log(res.json());
          commit("SET_NEWS", res.json());
        })
        .catch(() => console.log("failed"));
    },
    closeApp() {
      console.log('planning on closing!')
      // ipcRenderer.send('close')
    }
  },
  modules: {
  }
})
