<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="ml-5">
        <span>
          <h1>MyCellio</h1>
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="#"
        target="_blank"
        text
      >
        <span class="mr-2">Se connecter</span>
        <v-icon><mdi-user-circle></mdi-user-circle></v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable */

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('loadVideos')
  },
  data: () => ({
    //
  })
}
</script>
