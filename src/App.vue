<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view />
  </div>
</template>
 <script src="/static/vuecoms2.umd.js"></script>
<script>
import daohang from './components/daohang.vue'
export default {
  components: {
    'v-nav': daohang
  },
  name: 'App'
}
</script>

<style>
@import '../static/vuecoms2.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
