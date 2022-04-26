<template>
  <div class="cart">
    <div class="product" v-for="product of products" :key="product.id">
      <div class="img">
        <img :src="product.image_link" alt="" />
      </div>
      <div class="info">
        <div class="name">
          <p>{{ product.name }}</p>
        </div>
        <div class="quantity-price">
          <div class="quantity">
            <button @click="decrease(product)">-</button>
            <p>{{ product.quantity }}</p>
            <button @click="increase(product)">+</button>
          </div>
          <p class="price">$ {{ product.price * product.quantity }}</p>
        </div>
      </div>
    </div>
    <div class="total-price">
      <p max="5">Total: $ {{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      totalPrice: 0,
    };
  },

  mounted() {
    this.products = this.$store.state.cart;
    console.log("cart mounted");

    this.products.reduce(
      (prev, curr) => (this.totalPrice = prev + curr.price * curr.quantity),
      0
    );
  },

  methods: {
    decrease(product) {
      this.$store.commit("decrease", product);
      this.$forceUpdate();

      this.products.reduce(
        (prev, curr) => (this.totalPrice = prev + curr.price * curr.quantity),
        0
      );
    },
    increase(product) {
      this.$store.commit("increase", product);
      this.$forceUpdate();

      this.products.reduce(
        (prev, curr) => (this.totalPrice = prev + curr.price * curr.quantity),
        0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  font-size: 1.5rem;
  padding: 1rem;
  min-height: 350px;
  width: 430px;
  background-color: #f1f1f1;
  position: absolute;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;

  p {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product {
    display: flex;

    .img {
      img {
        object-fit: contain;
        height: 130px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;

      .name {
        text-align: start;
        p {
          width: 300px;
        }
      }
      .quantity-price {
        display: flex;
        justify-content: space-between;

        .quantity {
          display: flex;
          width: 80px;
        }
      }
    }
  }
  .total-price {
    align-self: flex-start;
    p {
      width: 180px;
    }
  }
}
</style>
