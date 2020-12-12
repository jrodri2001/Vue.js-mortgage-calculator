<template>
  <div id="app">
    <LTTCalculator msg="Land Transfer Tax Calculator" />
  </div>
</template>

<script>
import LTTCalculator from "./components/LTTCalculator.vue";

export default {
  name: "Land Transfer Tax Calculator",
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
