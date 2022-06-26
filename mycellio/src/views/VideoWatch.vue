<template>
  <div class="container-video-watch">
    <video-player
      class="video-player-box mt-20"
      ref="videoPlayer"
      :options="playerOptions"
    >
    </video-player>
    <div class="d-flex flex-column justify-center">
      <div class="d-flex flex-row justify-center mb-10">
        <span v-for="tag_id in video.attributes.tag_ids" :key="tag_id">
          <router-link :to="{ name:'tag', params: {id: tag_id} }" class="text-decoration-none">
            <v-btn dark rounded class="tag-button mx-2">{{ getTag(tag_id).attributes.name }}</v-btn>
          </router-link>
        </span>
      </div>
      <div class="d-flex flex-column align-center">
        <div class="mb-10">
          <h1>{{ video.attributes.name }}</h1>
        </div>
        <div v-html="video.attributes.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import 'video.js/dist/video-js.css'
import VideoPlayer from '@/components/VideoPlayer.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    VideoPlayer
  },
  computed: {
    video() {
      return this.$store.state.videos.find(videoId => videoId.id == this.$route.params.id) || {}
    },
    ...mapGetters(['getTag']),
    playerOptions () {
      return {
        height: '500',
        autoplay: true,
        muted: true,
        controls: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0, 2.5, 3.0],
        sources: [
          {
            type: 'video/mp4',
            src: this.video.attributes.videourl
          }
        ],
        poster: this.video.attributes.thumbnail
      }
    }
  }
}
</script>

<style>
.video-player-box .video-js {
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}
.container-video-watch{
  margin-top: 50px;
  margin-bottom: 50px;
   height: 50%;
}
</style>
