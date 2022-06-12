<template>
  <div class="home">
    <h1>MyCELLIO</h1>
    <span v-for="tag in tags" :key="tag.attributes.name">
       <button class="tag-button">{{ tag.attributes.name }}</button>
    </span>
    <div class="video-container">
      <div v-for="video in videos" v-bind:key="video.id">
         <VideoListItem :video="video"></VideoListItem>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import VideoListItem from '@/components/VideoListItem.vue'
export default {
    name: "HomeView",
    computed: {
        ...mapState(["videos"]),
    },
    components: { VideoListItem }
}
</script>

<style scoped lang="scss">
/* .video-container {
} */
</style>
