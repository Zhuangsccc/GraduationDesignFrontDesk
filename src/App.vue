<template>
  <div id="app">
    <topArea v-show="this.$route.meta.show"></topArea>
    <router-view></router-view>
  </div>
</template>

<script>
import topArea from "@/components/topArea"
export default {
  name: 'App',
  components:{topArea},
   data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1200px;
}
</style>
