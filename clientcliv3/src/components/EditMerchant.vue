<template>
<v-layout>
    <v-flex xs6>
    <panel title="Edit Merchant">
    <v-text-field
            label="Merchant Name"
            required
            :rules="[required]"
            type="text"
            v-model="merchant.merchantname"
          ></v-text-field>

          <v-text-field
            v-model="merchant.custnum"
            label="Customer Number"
            type="number"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            v-model="merchant.merchantid"
            label="Merchant ID"
            Single-line
            type="number"
            required
            :rules="[required]"
          ></v-text-field>

          
          <v-text-field
            v-model="merchant.merchantstatus"
            label="Merchant Status"
            Single-line
            type="text"
            required
            :rules="[required]"
          ></v-text-field>

          <!-- <v-overflow-btn
          class="my-2"
          :items="status"
          v-model="status"
          label="Status"
          required
          :rules="[required]"
          target="#dropdown-example"
        ></v-overflow-btn> -->
        <div class="danger-alert" v-if="error">
            {{error}}
        </div>
          <v-btn class="cyan" dark
          @click="save">
          Update Merchant
          </v-btn>
    </panel>
    
    </v-flex>
</v-layout>

</template>

<script>
// import Panel from '@/components/Panel'
import MerchantService from '@/services/MerchantService'

export default {
    components: {
        // Panel
    },
    data () {
        return {
          merchant: {
            merchantname: null,
            custnum: null,
            merchantid: null,
            merchantstatus: null
            
        },
          error : null,
          //status: ['Active', 'Deactivated'],

    required: (value) => !!value || 'Required.'
          
      }
    },
    methods: {
        async save() {
            this.error = null
            const areAllFieldsFilledIn = Object
            .keys(this.merchant)
            .every(key => !!this.merchant[key])
            // if (!areAllFieldsFilledIn){
            //     this.error = 'Please fill in all the required fields'
            //     return
            // }
            const viewmerchantId = this.$store.state.route.params.viewmerchantId
            try{
            await MerchantService.put(this.merchant)
            this.$router.push({
              name: 'viewmerchant',
              params: {
                viewmerchantId: viewmerchantId
              }
            })
            }catch (err) {
              console.log(err)
            }
      }
      
    },
    async mounted () {
      try{
          const viewmerchantId = this.$store.state.route.params.viewmerchantId
          this.merchant = (await MerchantService.show(viewmerchantId)).data
            
        } catch (err){
           console.log(err)
        }
    }
}

</script>

<style scoped>
.danger-alert{
    color: red
}
</style>
