<template>
  <div id="app">
    <div>
      <word></word>
    </div>
  </div>
</template>

<script>
import word from './components/word.vue'

export default {
  name: 'app',
  components: {
    word
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div{
  font-size : 50px;
}
p{
  font-size : 20px;
}
</style>
