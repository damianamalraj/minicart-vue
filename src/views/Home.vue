<template>
  <div class="home">
    <Product v-for="product of products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import Product from "../components/Product.vue";
export default {
  data() {
    return {
      products: "",
    };
  },
  mounted() {
    this.products = this.$store.state.products;
  },
  components: { Product },
};
</script>
<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}
</style>
