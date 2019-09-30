<template>

<v-container>
<v-layout column>
  <v-flex class="flex-md-shrink-1">
    
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>
      <div class="pl-5 pr-5 pt-2 pb-2">
          <slot align="center">
              No slot content defined
          </slot>
	</div> 
   </div>  
  </v-flex>
</v-layout>
</v-container>
  



</template>

<script>
export default {
    props: [
        'title'
    ]
}

</script>

<style scoped>

</style>
