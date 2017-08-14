<template>
  <div class="app">
    <app-header :collapse.sync="collapse"/>
    <sidebar :collapse="collapse"/>
    <div class="container">
      <breadcrumb :routes="routes"/>
      <div class="page-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style>
  @import "../css/variables.css";
  
  .app {
    min-height: 100%;
    height: auto;
    position: relative;
    overflow: hidden;

    &:after {
      content: "";
      display: table;
      clear: both;
    }
    
    .sidebar.collapse ~ .container {
      margin-left: var(--sidebar-collapse-width);
      @media (max-width: 768px) {
        & {
          margin-left: 0;
        }
      }
    }

    .container {
      margin-left: var(--sidebar-width);
      margin-top: var(--navbar-height);
      overflow: hidden;
    }

    .page-container {
      margin: 15px 15px;
    }
  }
</style>

<script>
import AppHeader from '../components/Header'
import Sidebar from '@/components/Sidebar'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'layout',
  components: {
    AppHeader,
    Sidebar,
    Breadcrumb
  },
  data() {
    return {
      collapse: false
    }
  },
  computed: {
    routes: function() {
      return this.$route.matched
    }
  }
}
</script>