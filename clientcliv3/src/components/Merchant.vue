<template>
<v-container>

<v-layout>
  <v-flex class="align-items">
    <panel title="List of Merchants" class="justify-center">
      <v-btn 
      slot="action"
      @click="navigateTo({ name: 'create-merchant'})"
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
        <v-icon>add</v-icon>
      </v-btn>
      <div v-for="merchant in merchants" 
      :key="merchant.id"
      class="merchant">
      
        
          <div class="merchant-name">
            {{merchant.merchantname}}
          </div>
          <div class="merchant-custnum">
            {{merchant.custnum}}
          </div>
          <div class="merchant-id">
            {{merchant.merchantid}}
          </div>
          <div class="merchant-status">
            {{merchant.merchantstatus}}
          </div>
          <v-btn 
            class="cyan" 
            dark
            @click="navigateTo({name: 'viewmerchant', params: {viewmerchantId: merchant.id}})">
            View
        </v-btn>
        
      <!-- Retreiving the account number, gross amount and net amount but not displaying -->
      <!-- {{merchant.actnum}} -
      {{merchant.grossamt}} - 
      {{merchant.netamt}} - -->
      
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
    methods: {
      navigateTo(route){
        this.$router.push(route)
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
.merchant {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.merchant-name {
  font-size: 30px;
}
.merchant-custnum {
  font-size: 25px;
}
.merchant-id {
  font-size: 20px;
}
.merchant-status {
  font-size: 20px;
}
</style>
