<template>
<v-container>

      <panel title="Register" >
        <form 
         name="merchant-portal-form"
         autocomplete="off">
     <v-text-field
            v-model="email"
            label="E-mail"
            autocomplete="new-password"
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
  <div class="danger-alert" v-html="error"/>
  <div class="msg" v-html="msg"/>
  <br>
  <v-btn class="cyan" dark
   @click="register">
   Register
   </v-btn>
      </panel>
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
      error: null,
      msg: null
    }
  },
  components: {
    // Panel
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch("setToken", response.data.token)
        this.$store.dispatch("setUser", response.data.user)
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
.error{
  /* color: red; */
  background-color: blanchedalmond;
}

.msg{
  color:blue;
}
</style>
