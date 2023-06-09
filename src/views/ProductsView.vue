<script setup>
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()

store.fetchProducts()
</script>

<template>
  <div class="products">
    <div class="product-container" v-for="product in store.productsData">
      <img class="image-wrapper" v-bind:src="product.image" alt="image" />
      <div class="product-info-container">
        <div>
          <div>{{ product.title }}</div>
        </div>
        <div>{{ `${product.price} USD` }}</div>
        <button v-on:click="store.addToCart(product)">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
  }
  .product-container {
    display: flex;
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 20px;
    margin-right: 20px;
    width: 280px;
  }
  .product-info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* height: 130px; */
  }
  .image-wrapper {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
}
</style>
