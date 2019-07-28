<template>
  <div class="navagation">
    <router-link to="/jingyesi">静夜思</router-link>
  </div>
</template>
<script>
export default {
  name: 'daohang',
  data() {
    return {}
  }
}
</script>

<style scoped>
.navagation {
  background: #09c;
}
.navagation a {
  display: inline-block;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-left: 10px;
  color: #000;
  text-decoration: none;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-left: 10px;
  color: #000;
}
a {
  color: #42b983;
}
</style>
