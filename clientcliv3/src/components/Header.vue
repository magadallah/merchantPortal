<template>
  <div>
    <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
          <span class="gotohome"
          @click="navigateTo({name: 'home'})">
          Merchant Portal
          </span>
          </v-toolbar-title>
          <v-toolbar-items>
            <v-btn
            text 
            @click="navigateTo({ name: 'merchantlist'})">
            Merchants
            </v-btn>
          </v-toolbar-items>
            

      <div class="flex-grow-1"></div>

      <!-- <v-toolbar-items>
        <v-btn depressed small>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/register">Register</router-link>
        </v-btn>
      </v-toolbar-items> -->
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn text 
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo({ name: 'login' })">
              login
              <!-- <router-link to="/register">Sign up</router-link> -->
          </v-btn>

          <v-btn text 
          v-if="$store.state.isUserLoggedIn"
          @click="logout">
              Logout
              <!-- <router-link to="/register">Sign up</router-link> -->
          </v-btn>

          <v-btn text 
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo({ name: 'register' })">
              Sign Up
              <!-- <router-link to="/register">Sign up</router-link> -->
          </v-btn>

      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

export default {
    methods: {
        navigateTo (route){
            this.$router.push(route)
        },
        logout(){
          this.$store.dispatch('setToken', null)
          this.$store.dispatch('setUser', null)
          this.$router.push({
            name: 'home'
          })
          
        }
    }
  
}
</script>

<style scoped>
.gotohome{
    cursor: pointer;
    
}
.gotohome:hover{
    color: black
}

</style>
