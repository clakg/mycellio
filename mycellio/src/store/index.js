import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api'

Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
  state: {
    videos: []
  },
  getters: {},
  mutations: {
    SET_VIDEOS(state, videos) {
      state.videos = videos
    }
  },
  actions: {
    async loadVideos({ commit }) {
      let response = await Api().get('/videos')
      commit('SET_VIDEOS', response.data.data)
    }
  },
  modules: {}
})
