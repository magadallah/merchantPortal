<template>
<v-container>

<v-layout>
  <v-flex class="align-items">
    <search-merchant-panel />
    <merchant-panel />
  </v-flex>
</v-layout>
</v-container>

</template>

<script>
import MerchantPanel from './MerchantPanel'
import SearchMerchantPanel from './SearchMerchantPanel'
import MerchantService from '@/services/MerchantService'
// import Panel from '@/components/Panel'

export default {
  components: {
    // Panel,
    MerchantPanel,
    SearchMerchantPanel
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
