<template>
  <div class="home">
    <h1>MyCELLIO</h1>
    <div class="video-container">
      <div v-for="video in videos" v-bind:key="video.id">
        <router-link :to="{ name: 'video-watch', params: { id: video.id } }">
          <div class="video-box">
            <img :src="video.attributes.thumbnail" />
            <div>
              <h3>{{ video.attributes.name }}</h3>
              <div v-html="video.attributes.description"></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Api from '@/services/api'
export default {
  name: 'HomeView',
  components: {},
  mounted() {
    this.$store.dispatch('loadVideos')
  },
  computed: {
    videos () {
      return this.$store.state.videos
    }
  }
}
</script>

<style scoped lang="scss">
.video-container {
  .video-box {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    img {
      width: 200px;
      padding: 10px;
    }
  }
}
</style>
