import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(axios);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
  },
  getters: {
    allImages: (state) => state.photos,
  },
  mutations: {
    setImages: (state, photos) => (state.photos = photos),
    removeImage: (state, image) => {
      state.photos.splice(image, 1);
    },
  },
  actions: {
    async fetchImages({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=100"
      );
      commit("setImages", response.data);
    },

    deleteImages: (contex, image) => {
      contex.commit("removeImage", image);
    },
  },
  modules: {},
});
