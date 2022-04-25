<template>
  <div id="app">
    <div class="nav-container">
      <div class="nav">
        <h1>
          <a href="#">
            <h1>My webshop.com</h1>
          </a>
        </h1>
        <div class="cart-container">
          <img class="cart" src="./assets/cart-shopping-solid.svg" alt="cart" />
          <p>Cart</p>
          <img class="arrow" src="./assets/caret-down-solid.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  margin: 0;
  text-decoration: none;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.app {
  max-width: 1100px;
  margin: auto;
  margin-top: 2rem;
}

.nav-container {
  background-color: #343a3f;
  padding: 0.5rem;

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;

    .cart-container {
      display: flex;
      align-items: center;
      background-color: #6c757d;
      padding: 0.5rem;
      border-radius: 4px;

      .cart {
        width: 18px;
        margin: 0 6px;
      }

      p {
        font-size: 16px;
        margin: 0 6px;
      }
      .arrow {
        width: 8px;
        margin: 0 6px;
      }
    }
  }

  a {
    font-size: 10px;
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
