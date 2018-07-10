<template>
  <header class="row">
    <nav class="navbar navbar-expand-sm navbar-light">
      <a class="navbar-brand" href="/">PIZZERIA</a>
      <ul class="navbar-nav">
        <router-link :to="homeLink" tag="li"><a class="nav-link">home</a></router-link>
        <router-link :to="menuLink" tag="li"><a class="nav-link">menu</a></router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      homeLink: '/',
      menuLink: '/menu'
    }
  }
}
</script>



<style>
  header {
    margin-top: 15px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }
</style>
