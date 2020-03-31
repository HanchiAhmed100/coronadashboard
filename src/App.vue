<template>
  <div id="app">
    <div>
      <Dashboard></Dashboard>
    </div>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard
  }
}
</script>

<style>
body{
  background-color:#f8f8f8
}

</style>
