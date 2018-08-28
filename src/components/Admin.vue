<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pizzeria-new-pizza></pizzeria-new-pizza>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Menu:</h3>
        <table class="table table-hover">
          <thead class="thead-light">
            <tr>
              <th>Item</th>
              <th>Remove from menu</th>
            </tr>
          </thead>
          <tbody v-for="item in getMenuItems">
            <tr>
              <td>{{ item.name }}</td>
              <td><button class="btn btn-outline-danger btn-sm">x</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h3>Current orders: {{ numberOfOrders }}</h3>
        <table class="table table-sm">

          <thead class="thead-light">
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

            <div class="order-number">
              <strong><em>Order Number: 1</em></strong>
              <button class="btn btn-outline-danger btn-sm">x</button>
            </div>
            <tr>
              <td>Margherita</td>
              <td>9"</td>
              <td>1</td>
              <td>6.95</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <pizzeria-login></pizzeria-login>
      </div>
    </div>
  </div>
</template>




<script>
import NewPizza from './NewPizza.vue'
import Login from './Login.vue'
export default {
  components: {
    pizzeriaNewPizza: NewPizza,
    pizzeriaLogin: Login
  },
  computed: {
    getMenuItems() {
      return this.$store.state.menuItems
    },
    numberOfOrders() {
      return this.$store.getters.numberOfOrders
    }
  },
  beforeRouteLeave: (to, from, next) => {
    if(confirm("Have you remebered to log out") == true) {
      next();
    } else {
      next(false);
    }
  }
}
</script>
