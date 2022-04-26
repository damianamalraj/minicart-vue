import Vue from "vue";
import Vuex from "vuex";
import products from "../data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: products,
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cart.find((item) => {
        return item.id === product.id;
      });

      if (item) {
        item.quantity++;
      } else {
        product.quantity = 1;
        state.cart.push(product);
      }
    },
    decrease(state, product) {
      const item = state.cart.find((item) => {
        return item.id === product.id;
      });

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      }
    },
    increase(state, product) {
      const item = state.cart.find((item) => {
        return item.id === product.id;
      });
      console.log(item);
      if (item) {
        item.quantity++;
      }
    },
  },
});
