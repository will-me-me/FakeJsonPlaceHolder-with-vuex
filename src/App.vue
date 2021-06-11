<template>
  <v-app class="light-blue lighten-2">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="JSON Logo"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn target="_blank" text>
        <span class="mr-2">fake JSONPlaceHOLDER</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
