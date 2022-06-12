<template>
  <div class="home">
    <h1>MyCELLIO</h1>
    <span v-for="tag in tags" :key="tag.attributes.name">
       <button class="tag-button">{{ tag.attributes.name }}</button>
    </span>
    <div class="video-container">
      <div v-for="video in videos" v-bind:key="video.id">
        <router-link :to="{ name: 'video-watch', params: { id: video.id } }">
          <div class="video-box">
            <img :src="video.attributes.thumbnail" />
            <div>
              <h3>{{ video.attributes.name }}</h3>
              <div v-html="video.attributes.description"></div>
              <span v-for="tag_id in video.attributes.tag_ids" :key="tag_id">
                <button class="tag-button">{{ getTag(tag_id).attributes.name }}</button>
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'HomeView',
  computed: {
    ...mapState(['videos','tags']),
    ...mapGetters(['getTag'])
  },
}
</script>

<style lang="scss">
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
