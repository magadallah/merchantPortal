<template>
  <div>
    <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title>
          <span class="gotohome"
          @click="navigateTo({name: 'home'})">
          Merchant Portal
          </span>
          </v-toolbar-title>

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
          @click="navigateTo({ name: 'login' })">
              login
              <!-- <router-link to="/register">Sign up</router-link> -->
          </v-btn>
          <v-btn text 
          @click="navigateTo({ name: 'register' })">
              Sign Up
              <!-- <router-link to="/register">Sign up</router-link> -->
          </v-btn>

      </v-toolbar-items>

      <!--template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template-->
    </v-toolbar>
  </div>
</template>

<script>

export default {
    methods: {
        navigateTo (route){
            this.$router.push(route)
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
