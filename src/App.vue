<template>
  <div id="app">
    <div class="container">
      <pizzeria-header></pizzeria-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <pizzeria-footer></pizzeria-footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  

  export default {
    components: {
      pizzeriaHeader: Header,
      pizzeriaFooter: Footer
    }
  }
</script>

<style lang="scss">

</style>
