<template>
<div>
  <div class="ticket">
  <h1>Public Journal Entries</h1>
    <div class="product" v-for="product in products.slice().reverse()" :key="product.id">
    <hr>
      <div class="problem">
        <h1>{{product.name}}</h1>
        <h2>{{product.title}}</h2>
        <p><i>{{product.date}}</i></p>
        <p>{{product.message}}</p>
      </div>


    </div>

  </div>
</div>
</template>

<script>



export default {
  name: 'ProductList',
  props: {
    products: Array
  },

  methods: {
    addToCart(product) {

      this.$root.$data.cart.push(product)
    }
  },

}



</script>

<style scoped>







.auto {
  margin-left: auto;
}
</style>
