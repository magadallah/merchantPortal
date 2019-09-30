<template>
<v-layout>
    <v-flex xs6>
    <panel title="Create Merchant">
    <v-text-field
            v-model="merchant.merchantname"
            label="Merchant Name"
            type="text"
            required
          ></v-text-field>

          <v-text-field
            v-model="merchant.custnum"
            label="Customer Number"
            type="number"
            required
          ></v-text-field>

          <v-text-field
            v-model="merchant.merchantid"
            label="Merchant ID"
            Single-line
            type="number"
            required
          ></v-text-field>
          <v-btn class="cyan" dark
   @click="create">
   Create Merchant
   </v-btn>
    </panel>
    
    </v-flex>
</v-layout>

</template>

<script>
import Panel from '@/components/Panel'
import MerchantService from '@/services/MerchantService'

export default {
    components: {
        Panel
    },
    data () {
        return {
          merchant: {
            merchantname: null,
            custnum: null,
            merchantid: null
        }
      }
    },
    methods: {
        async create() {
        try{
            await MerchantService.postMerchant(this.merchant)
        } catch (err){
            console.log(err)
        }

      }
    }
}

</script>

<style scoped>

</style>
