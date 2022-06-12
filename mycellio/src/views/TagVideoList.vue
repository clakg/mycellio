<template>
    <div>
        <h1>Videos with Tag "{{ getTag(this.$route.params.id).attributes.name }}"</h1>
        <span v-for="tag in tags" :key="tag.attributes.id">
            <router-link :to="{ name:'tag', params: {id: tag.attributes.id} }" >
                <button class="tag-button">{{ getTag(tag.id).attributes.name }}</button>
            </router-link>
        </span>
        <div v-for="video in videosOnTag" :key="video">
            <video-list-item :video="video"></video-list-item>
        </div>
    </div>
</template>
<script>
import VideoListItem from '@/components/VideoListItem.vue'
/* eslint-disable */
import { mapGetters, mapState } from 'vuex'
export default {
  components: { VideoListItem },
    computed: {
        ...mapState(['videos', 'tags']),
        ...mapGetters(['getTag']),

        tag(){
            return this.getTag(this.$route.params.id)
        },

        videosOnTag(){
            return this.videos.filter(video => this.tag.attributes.video_ids.includes(video.id.toString()))
        }
    }
}
</script>