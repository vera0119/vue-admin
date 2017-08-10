<template>
  <div class="app">
    <app-header :collapse.sync="collapse"/>
    <sidebar :collapse="collapse"/>
  </div>
</template>
<style>
  @import "../css/variables.css";
  
  .app {
    min-height: 100%;
    height: auto;
    position: relative;

    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }

  .navbar-fixed-top ~ .sidebar {
    padding-top: var(--navbar-height);
  }
</style>

<script>
import AppHeader from '../components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'layout',
  components: {
    AppHeader,
    Sidebar
  },
  data() {
    return {
      collapse: false
    }
  }
}
</script>