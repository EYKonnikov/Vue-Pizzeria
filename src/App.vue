<template>
  <div id="app">
    <div class="container">
      <pizzeria-header></pizzeria-header>
    </div>
    <div class="container">
      <pizzeria-admin></pizzeria-admin>
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
  import Admin from './components/Admin.vue'

  export default {
    components: {
      pizzeriaHeader: Header,
      pizzeriaMain: Main,
      pizzeriaFooter: Footer,
      pizzeriaMenu: Menu,
      pizzeriaAdmin: Admin
    }
  }
</script>

<style lang="scss">

</style>
