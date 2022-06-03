<template>
  <div class="home">
    <h1>MyCELLIO</h1>
    <div v-for="tag in tags" :key="tag.attributes.name">
      {{tag.attributes.name}}
    </div>
    <div class="video-container">
      <div v-for="video in videos" v-bind:key="video.id">
        <router-link :to="{ name: 'video-watch', params: { id: video.id } }">
          <div class="video-box">
            <img :src="video.attributes.thumbnail" />
            <div>
              <h3>{{ video.name }}</h3>
              <div v-html="video.attributes.description"></div>
              <div v-for="tag in tags" :key="tag.attributes.name">
                <div v-for="tag_id in video.attributes.tag_ids" :key="tag_id">
                  {{ tag.attributes.name }}
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
export default {
  name: 'HomeView',
  computed: {
    ...mapState(['videos','tags'])
    // videos () {
    //   return this.$store.state.videos
    // },
    // tags(){
    //   return this.$store.state.tags
    // },
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
