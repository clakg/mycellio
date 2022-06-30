<template>
  <v-container class="container-video-watch">
    <v-row class="mb-15">
      <v-col sm="12" md="9" lg="9" cols="12">
        <video-player
          class="video-player-box mt-20"
          ref="videoPlayer"
          :options="playerOptions"
        >
        </video-player>
      </v-col>
      <v-col sm="12" md="3" lg="3" cols="12">
        <div class="mb-10">
          <div class="mb-10">
            <span v-for="tag_id in video.attributes.tag_ids" :key="tag_id">
              <router-link :to="{ name:'tag', params: {id: tag_id} }" class="text-decoration-none">
                <v-btn dark rounded class="tag-button mr-2">{{ getTag(tag_id).attributes.name }}</v-btn>
              </router-link>
            </span>
          </div>
          <h1>{{ video.attributes.name }}</h1>
        </div>
        <div class="d-flex justify-center video-description m-20">
          <div v-html="video.attributes.description"></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
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

<style lang="scss">
/* .video-player-box .video-js {
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
} */
.container-video-watch{
  margin-top: 50px;
  margin-bottom: 50px;
}
/* .video-description{
  width: 60%;
} */
</style>
