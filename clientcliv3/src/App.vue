<template>
  <v-app>
    <PageHeader />
    <main>
      <v-container fluid>
    <v-content>
      <router-view/>
    </v-content>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import PageHeader from "./components/Header";

export default {
  name: "App",
  components: {
    HelloWorld,
    PageHeader
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style>
.danger-alert{
    color: red
}

</style>