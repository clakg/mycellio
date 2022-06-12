<template>
    <div>
        <h1>Videos with Tag "{{ getTag(this.$route.params.id).attributes.name }}"</h1>
        <div v-for="video in videosOnTag" :key="video">{{ video }}</div>
    </div>
</template>
<script>
/* eslint-disable */
import { mapGetters, mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['videos']),
        ...mapGetters(['getTag']),

        tag(){
            return this.getTag(this.$route.params.id)
        },

        videosOnTag(){
            //console.log(this.videos.filter(video => video))
            return this.videos.filter(video => this.tag.video_ids === video.attributes.id)
        }
    }
}
</script>