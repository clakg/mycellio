<template>
  <div class="home">

    <h1 class="display-4 ma-4 d-flex justify-center my-10">
      Toutes les vidéos
    </h1>
    <div class="d-flex justify-center my-10">
      <span v-for="tag in tags" :key="tag.attributes.id">
        <router-link :to="{ name:'tag', params: {id: tag.attributes.id} }" class="text-decoration-none">
          <v-btn dark rounded class="tag-button mx-2">{{ getTag(tag.id).attributes.name }}</v-btn>
        </router-link>
      </span>
    </div>
    <div>
      <div class="d-flex flex-wrap justify-center">
        <div v-for="video in videos" :key="video.id">
          <VideoListItem :video="video"></VideoListItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapGetters } from 'vuex';
import VideoListItem from '@/components/VideoListItem.vue';
export default {
  name: "home",
  components: {
    VideoListItem
},
  methods: {},
  computed: {
    ...mapState(['videos', 'tags']),
    ...mapGetters(['getTag'])
  }
};
</script>

<style scoped lang="scss">
</style>