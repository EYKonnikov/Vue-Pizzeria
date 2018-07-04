<template>
  <div class="row">
    <form>
      <div class="form-group">
        <label>Email address</label> 
        <input class="form-control" type="email" id="email" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label>Password</label> 
        <input class="form-control" type="password" id="password" placeholder="Enter password">
    </div>
    <button type="button" class="btn btn-primary" @click.prevent="SignIn">Sign in</button>
    <button type="button" class="btn btn-danger" @click.prevent="SignOut">Sign out</button>
    </form>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  methods: {
    signIn() {

    },
    signOut() {
      
    }
  }
}

</script>

