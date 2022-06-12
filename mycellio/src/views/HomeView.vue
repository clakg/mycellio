<template>
  <div class="home">
    <h1>MyCellio</h1>
    <span v-for="tag in tags" :key="tag.attributes.id">
      <router-link :to="{ name:'tag', params: {id: tag.attributes.id} }" >
        <button class="tag-button">{{ getTag(tag.id).attributes.name }}</button>
      </router-link>
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
import { mapGetters, mapState } from 'vuex'
import VideoListItem from '@/components/VideoListItem.vue'
export default {
    name: "HomeView",
    computed: {
        ...mapState(["videos", "tags"]),
        ...mapGetters(['getTag'])
    },
    components: { VideoListItem }
}
</script>

<style scoped lang="scss">
/* .video-container {
} */
</style>
