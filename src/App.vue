<template>
  <div id="app">
    <div class="container">
      <pizzeria-header></pizzeria-header>
    </div>
    <div class="container">
      <pizzeria-main></pizzeria-main>
    </div>
    <div class="container">
      <pizzeria-footer></pizzeria-footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      pizzeriaHeader: Header,
      pizzeriaMain: Main,
      pizzeriaFooter: Footer
    }
  }
</script>

<style lang="scss">

</style>
