<template>
    <v-card hover :to="{ name: 'video-watch', params: { id: video.id } }" class="text-decoration-none mx-2 mb-10" max-width="400" height="600">
        <v-img :src="video.attributes.thumbnail" height="350px"/>
        <div class="pa-10">
            <h3 class="black--text">{{ video.attributes.name }}</h3>
            <div class="text--secondary" v-html="video.attributes.description"></div>
            <span v-for="tag_id in video.attributes.tag_ids" :key="tag_id">
                <router-link :to="{ name:'tag', params: {id: tag_id} }" class="text-decoration-none">
                    <v-btn dark rounded small class="tag-button mr-2">{{ getTag(tag_id).attributes.name }}</v-btn>
                </router-link>
            </span>
        </div>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
/* eslint-disable */
export default {
    computed: {
        ...mapGetters(["getTag"])
    },
    props: ["video"]
}
</script>

<style lang="scss">
</style>