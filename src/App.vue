<template>
  <div id="app">
    <topArea></topArea>
    <router-view></router-view>
  </div>
</template>

<script>
import topArea from "@/components/topArea"
export default {
  name: 'App',
  components:{topArea}
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
