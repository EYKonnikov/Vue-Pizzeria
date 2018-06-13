<template>
  <div class="row">
    <div id="main" class="col-sm-12 text-center">
      <div class="background">
        <h1 class="main__title">Welcome to Pizzeria!</h1>
        <h2 class="main__paragraph">Feeling hungry?</h2>
        <button class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<style>
  #main {
    height: 800px;
    padding-top: 10%;
    background: url('../../src/assets/background__image--pizza.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
  }


  .main__title,
  .main__paragraph {
    margin-bottom: 6%;
  }

  .background {
    max-width: 60%;
    margin: 0 auto;
    background: #eee;
    opacity: 0.8;
    padding: 20px 0;
  }

  
  
</style>

