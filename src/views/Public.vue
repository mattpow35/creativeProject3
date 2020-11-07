<template>
<div>

  <PublicPosts :products="products" />
</div>
</template>

<script>
import PublicPosts from "../components/PublicPosts.vue"
export default {
  name: 'Home',
  components: {
    PublicPosts
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.publicPosts;
    }
  },
}
</script>


<style scoped>





</style>
