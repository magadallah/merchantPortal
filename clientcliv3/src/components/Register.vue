<template>
<v-container>

<v-layout column>
  <v-flex class="flex-md-shrink-1">
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="pl-5 pr-5 pt-2 pb-2">
        <form 
         name="merchant-portal-form"
         autocomplete="off">
     <v-text-field
            v-model="email"
            label="E-mail"
            autocomplete="new-email"
            required
          ></v-text-field>
	<br>
	  <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            autocomplete="new-password"
          ></v-text-field>
        </form>
	<br>
  <div class="error" v-html="error"/>
  <div class="msg" v-html="msg"/>
  <br>
  <v-btn class="cyan" dark
   @click="register">
   Register
   </v-btn>
	</div> 
   </div>  
  </v-flex>
</v-layout>
</v-container>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      msg: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
         this.msg = msg.response.data.msg
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error{
  /* color: red; */
  background-color: blanchedalmond;
}

.msg{
  color:blue;
}
</style>
