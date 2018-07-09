<template>
  <header class="row">
    <nav class="navbar navbar-expand-sm navbar-light">
      <a class="navbar-brand" href="/">PIZZERIA</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/"><a class="nav-link">home</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu"><a class="nav-link">menu</a></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
  header {
    margin-top: 15px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }
</style>
