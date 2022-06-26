<template>
    <div>
        <h1 class="display-3 ma-4 d-flex justify-center my-10">Videos with Tag "{{ getTag(this.$route.params.id).attributes.name }}"</h1>
        <div class="d-flex justify-center my-10">
            <span v-for="tag in tags" :key="tag.attributes.id">
                <router-link :to="{ name:'tag', params: {id: tag.attributes.id} }" class="text-decoration-none">
                    <v-btn dark rounded class="tag-button mx-2">{{ getTag(tag.id).attributes.name }}</v-btn>
                </router-link>
            </span>
        </div>
        <div class="ml-8 pl-8">
            <div class="d-flex flex-wrap">
                <div v-for="video in videosOnTag" :key="video">
                    <video-list-item :video="video"></video-list-item>
                </div>
            </div>
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

<style scoped lang="scss">
</style>