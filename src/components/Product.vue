<template>
  <div class="product">
    <div class="info">
      <img :src="product.image_link" alt="" />
      <h4>{{ product.name }}</h4>
    </div>
    <div class="price">
      <button>Buy</button>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["product"],
};
</script>

<style lang="scss" scoped>
.product {
  width: 220px;
  height: 380px;
  border: 1px solid #999;
  padding: 1rem;
  color: #333;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    object-fit: contain;
    height: 250px;
    width: 100%;
  }

  h4 {
    width: 80%;
    word-wrap: break-word;
    text-align: start;
  }

  .price {
    display: flex;
    justify-content: space-between;

    button {
      color: white;
      background-color: #037bfe;
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
    }
  }
}
</style>
