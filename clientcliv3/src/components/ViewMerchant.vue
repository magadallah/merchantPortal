<template>
<div>
    <v-layout>
        
        <v-flex xs6>
         <panel title="Merchant Data">
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
          
        </panel>
        </v-flex>
        <v-flex xs6>
            <panel title="Merchant Customer Numbers">
                <div class="merchant-custnum">
                    <textarea
                        v-model="merchant.custnum"
                        readonly
                        label="Customer Number"
                        type="number"
                    ></textarea>
                </div>
            </panel>
            <v-btn 
            class="cyan" 
            dark
            @click="navigateTo({name: 'edit-merchant' , params:{viewmerchantId:merchant.id}})">
            Edit
        </v-btn>
        </v-flex>
    </v-layout>
</div>

</template>

<script>
import MerchantService from '@/services/MerchantService'
// import Panel from '@/components/Panel'
export default {
    data () {
        return {
            merchant: {}
        }
    },
    async mounted (){
        const viewmerchantId = this.$store.state.route.params.viewmerchantId
        this.merchant = (await MerchantService.show(viewmerchantId)).data
    },
    components: {
        // Panel
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    }
}

</script>

<style scoped>

</style>
