<template>
  <div class="home">
    <h1>MyCELLIO</h1>
    <div v-for="tag in tags" :key="tag.name">
      {{tag.name}}
    </div>
    <div class="video-container">
      <div v-for="video in videos" v-bind:key="video.id">
        <router-link :to="{ name: 'video-watch', params: { id: video.index } }">
          <div class="video-box">
            <img :src="video.thumbnail" />
            <div>
              <h3>{{ video.name }}</h3>
              <div v-html="video.description"></div>
                <div v-for="tag_id in video.tag_ids" :key="tag_id">
                  {{ getTag(tag_id).name }}
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
    ...mapState(['videos','tags']),
  },
  methods: {
    getTag(tag_id){
      console.log('TAG_ID',tag_id,'THIS.TAG', this.tags)
      return this.tags.find(tag => tag.id === tag_id)
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
