<template>
  <div>
    <v-container class="my-4">
      <h1 class="subheading grey--text">My Photos</h1>
      <v-row class="text-center" dense>
        <v-col xs12 sm6 md4 lg3 v-for="image in allImages" :key="image.title">
          <v-card color="primary" dark elevation="4" outlined light>
            <v-card-title
              class="text-center"
              v-text="image.title"
            ></v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-img class="pt-2" aspect-ratio="2" contain>
              <v-avator size="30" class="grey lighten-2">
                <img :src="image.url" />
              </v-avator>
            </v-img>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed @click="deleteImages">
                <span>Delete</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HelloWorld",

  data: () => ({}),
  methods: {
    ...mapActions(["fetchImages", "deleteImages"]),
  },
  computed: mapGetters(["allImages"]),
  created() {
    this.fetchImages();
  },
};
</script>
