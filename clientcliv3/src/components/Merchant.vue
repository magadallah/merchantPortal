<template>
<v-container>

<v-layout column>
  <v-flex class="flex-md-shrink-1">
    <panel title="List of Merchants">
      <div v-for="merchant in merchants" 
      :key="merchant.id">
      {{merchant.merchantname}} - 
      {{merchant.custnum}} -
      {{merchant.merchantid}} - 
      {{merchant.actnum}} -
      {{merchant.grossamt}} - 
      {{merchant.netamt}} -
      {{merchant.merchantstatus}}
      </div>    
    </panel> 
  </v-flex>
</v-layout>
</v-container>

</template>

<script>
import MerchantService from '@/services/MerchantService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
   data () {
      return {
        merchants: null
      }
    },
    async mounted () {
      // TO Do a request to the backend to get all merchants
      this.merchants = (await MerchantService.getAllMerchants()).data
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
