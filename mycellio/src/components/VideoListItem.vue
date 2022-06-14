<template>
    <v-card hover :to="{ name: 'video-watch', params: { id: video.id } }" class="text-decoration-none mx-2 mb-10" max-width="400" height="450">
        <v-img :src="video.attributes.thumbnail" height="240px"/>
        <div class="pa-5">
            <h3 class="black--text">{{ video.attributes.name }}</h3>
            <div class="text--secondary my-5">{{ video.attributes.description | truncate(100) }}</div>
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
    props: ["video"],
    filters: {
        truncate: function(data,num){
            const descriptionTruncate = data.split("").slice(0, num).join("");
            return descriptionTruncate + '...';
        }
    }
}

</script>

<style lang="scss">
</style>