import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api'

Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
  state: {
    videos: [],
    tags: []
  },
  getters: {},
  mutations: {
    SET_VIDEOS(state, videos) {
      state.videos = videos
    },
    SET_TAGS(state, tags) {
      state.tags = tags
    }
  },
  actions: {
    async loadVideos({ commit }) {
      let response = await Api().get('/videos');
      let videos = response.data.data;
      let tags = response.data.included.map(tag => tag);
      videos.forEach(video => {
        video.attributes.tag_ids = video.relationships.tags.data.map(tag => tag.id)
      });
      commit('SET_VIDEOS', videos.map(video => video.attributes));
      commit('SET_TAGS', tags);
    }
  },
  modules: {}
})
