<template>
  <panel title="Search Merchant">
      <v-text-field
      label="Search by Merchant Name , Customer Number , Account Number or Status"
      v-model="search"
      ></v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
    data (){
        return {
            search: ''
        }
    },
    watch: {
        search: _.debounce (async function (value) {
            const route = {
                name:'merchantlist'
            }
            if (this.search !== ''){
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        }, 700),
        '$route.query.search':{
            immediate: true,
            handler(value) {
                this.search = value
            }
        }
    }

}
</script>

<style>

</style>