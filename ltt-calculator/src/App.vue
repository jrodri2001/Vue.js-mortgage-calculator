<template>
  <v-app id="wp-vue-app">
    <v-content>
    <LTTCalculator msg="Land Transfer Tax Calculator" description=""/>
    </v-content>
  </v-app>
</template>

<script>
import LTTCalculator from "./components/LTTCalculator.vue";

export default {
  name: "lttCalculator",
  components: {
    LTTCalculator,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
