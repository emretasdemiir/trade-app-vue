import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', (state) => {
  const cart = ref([])
  const products = ref([
    {
      name: 'Apple',
      price: '1000 USD',
      productImage:
        'https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mjnp3tua-apple-iphone-12-128gb-mor-mjnp3tua-637600583273536524.jpg'
    },
    {
      name: 'Samsung',
      price: '650 USD',
      productImage:
        'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/132960-2_large.jpg'
    },
    {
      name: 'Xiaomi',
      price: '350 USD',
      productImage:
        'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666598531.28686121!500x500.png'
    },
    {
      name: 'Xiaomi',
      price: '350 USD',
      productImage:
        'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666598531.28686121!500x500.png'
    },
    {
      name: 'Xiaomi',
      price: '350 USD',
      productImage:
        'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666598531.28686121!500x500.png'
    },
    {
      name: 'Xiaomi',
      price: '350 USD',
      productImage:
        'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666598531.28686121!500x500.png'
    },
    {
      name: 'Xiaomi',
      price: '350 USD',
      productImage:
        'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666598531.28686121!500x500.png'
    }
  ])

  const productsData = ref([])

  function addToCart(product) {
    debugger
    console.log(this.cart)

    this.cart.push(product)
  }

  async function fetchProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      const newData = await res.json()
      this.productsData = ref(newData)
    } catch (error) {
      // let the form component display the error
      return error
    }
  }

  return { cart, products, productsData, addToCart, fetchProducts }
})
