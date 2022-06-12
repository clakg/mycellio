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
  getters: {
    getTag: state => (id) => {
      return state.tags.find(tag => tag.id == id)
    }
  },
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
      let tags = response.data.included.filter(i => i.type === "tags");

      videos.forEach(video => {
        video.attributes.tag_ids = video.relationships.tags.data.map(tag => tag.id)
      });

      tags.forEach(tag => {
        tag.attributes.id = tag.id
        tag.attributes.video_ids = tag.relationships.videos.data.map(video => video.id)
      });

      commit('SET_VIDEOS', videos.map(video => video));
      commit('SET_TAGS', tags.map(tag => tag));
    }
  },
  modules: {}
})
