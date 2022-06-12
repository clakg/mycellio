<template>
  <div>
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
    >
    </video-player>
    <span v-for="tag_id in video.attributes.tag_ids" :key="tag_id">
      <button class="tag-button">{{ getTag(tag_id).attributes.name }}</button>
    </span>
    <!-- <img :src="video.thumbnail" alt="video" /> -->
    <h1>{{ video.attributes.name }}</h1>
    <div v-html="video.attributes.description"></div>
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
        height: '360',
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
  margin: auto;
}
</style>
