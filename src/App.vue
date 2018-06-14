<template>
  <div id="app">
    <div class="container">
      <pizzeria-header></pizzeria-header>
    </div>
    <div class="container">
      <pizzeria-menu></pizzeria-menu>
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
  import Menu from './components/Menu.vue'

  export default {
    components: {
      pizzeriaHeader: Header,
      pizzeriaMain: Main,
      pizzeriaFooter: Footer,
      pizzeriaMenu: Menu
    }
  }
</script>

<style lang="scss">

</style>
