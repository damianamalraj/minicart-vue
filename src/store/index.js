import Vue from "vue";
import Vuex from "vuex";
import products from "../data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: products,
  },
  mutations: {},
  actions: {},
  modules: {},
});
