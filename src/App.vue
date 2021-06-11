<template>
  <div id="app">
    <Rates />
  </div>
</template>

<script>
import Rates from "./components/Rates.vue";

export default {
  name: "App",
  components: {
    Rates
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Poppins", "AktivGrotesk", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $lightGrey;
}
</style>
