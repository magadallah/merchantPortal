<template>
<v-container>

<v-layout column>
  <v-flex class="flex-md-shrink-1">
    <div class="white elevation-2">
      <v-toolbar text dense class="cyan" dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <div class="pl-5 pr-5 pt-2 pb-2">
     <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
	<br>
	  <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>
	<br>
  <div class="danger-alert" v-html="error"/>
  <br>
  <v-btn class="cyan" dark
   @click="login">
   Login
   </v-btn>
	</div> 
   </div>  
  </v-flex>
</v-layout>
</v-container>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
// import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    // Panel
  },
  methods: {
    async login () {
      try {
        this.error = null
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'merchantlist'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.danger-alert{
    color: red
}
</style>
