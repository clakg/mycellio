<template>
    <div>
        <h1>Videos with Tag "{{ getTag(this.$route.params.id).attributes.name }}"</h1>
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
        ...mapState(['videos']),
        ...mapGetters(['getTag']),

        tag(){
            return this.getTag(this.$route.params.id)
        },

        videosOnTag(){
            //console.log(this.videos.filter(video => video))
            return this.videos.filter(video => this.tag.attributes.video_ids.includes(video.id.toString()))
        }
    }
}
</script>