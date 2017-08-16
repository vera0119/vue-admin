<template>
  <div class="sidebar sidebar-fixed" :class="{'collapse': collapse, 'ps ps--theme_default': !collapse}">
    <el-menu :default-active="$route.name" :collapse="collapse" :router="true">
      <el-menu-item index="dashboard" :route="{name: 'dashboard'}">
        <i class="fa fa-dashboard"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-submenu  index="2">
        <template slot="title">
          <i class="fa fa-pencil-square-o"></i>
          <span slot="title">Forms</span>
        </template>
        <el-menu-item index="1-1">Form Elements</el-menu-item>
        <el-menu-item index="1-2">File Upload</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="fa fa-briefcase"></i>
          <span slot="title">UI Elements</span>
        </template>
        <el-menu-item-group>
          <template slot="title">Data</template>
          <el-menu-item index="table" :route="{name: 'table'}">Table</el-menu-item>
          <el-menu-item index="pagination" :route="{name: 'pagination'}">Pagination</el-menu-item>
          <el-menu-item index="tag" :route="{name: 'tag'}">Tag</el-menu-item>
          <el-menu-item index="badge" :route="{name: 'badge'}">Badge</el-menu-item>
          <el-menu-item index="progress" :route="{name: 'progress'}">Progress</el-menu-item>
          <el-menu-item index="tree" :route="{name: 'tree'}">Tree</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="Tag">
          <el-menu-item index="1-3">Tag</el-menu-item>
          <el-menu-item index="1-4">Badge</el-menu-item>
        </el-menu-item-group> -->
      </el-submenu>
    </el-menu>
  </div>
</template>

<style>
  @import "../css/variables.css";

  .app {
    .sidebar {
      float: left;
      top: var(--navbar-height);
      bottom: 0;
      width: var(--sidebar-width);
      background-color: #fff;
      overflow: visible;

      @media (max-width: 768px) {
        &.collapse {
          display: none;
        }
      }
      
      &.sidebar-fixed {
        position: fixed;
        z-index: 999;
      }

      &:before {
        content: "";
        position: fixed;
        top: 0;
        bottom: 0;
        width: var(--sidebar-width);
        background-color: #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, .2);
      }

      &.collapse, &.collapse:before {
        width: var(--sidebar-collapse-width);
      }

      .el-menu-item .fa, .el-submenu .fa {
        vertical-align: baseline;
        margin-right: 10px;
      }
      
      > .el-menu {
        background-color: #fff;
        transition: initial;

        &.el-menu--collapse, &.el-menu--collapse:before {
          width: var(--sidebar-collapse-width);
        }

        > .el-menu-item, > .el-submenu {
          margin-top: -1px;
          border-top: 1px solid color(var(--color-light-white) shade(3%));
          border-bottom: 1px solid color(var(--color-light-white) shade(3%));
        }

        .el-submenu .el-menu {
          background-color: var(--color-dark-white);
        }

        &.el-menu--collapse {
          .el-submenu .el-menu {
            box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, .2), 5px 5px 5px -5px rgba(0, 0, 0, .2), 5px 5px 5px -5px rgba(0, 0, 0, .2);
            margin-left: 1px;
          }
        }
        
        &:not(.el-menu--collapse) {
          .el-submenu .el-menu {
            box-shadow: inset 0 4px 4px -2px rgba(0, 0, 0, .15), inset 0 -4px 4px -2px rgba(0, 0, 0, .15);
            background-color: var(--color-dark-white);
            &:before {
              content: "";
              display: block;
              position: absolute;
              z-index: 1;
              left: 25px;
              top: 0;
              bottom: 0;
              border-left: 1px solid var(--color-light-gray);
            }
          }

          .el-submenu .el-menu-item {
            &:before {
              content: "";
              position: absolute;
              width: 4px;
              height: 4px;
              left: 23px;
              top: 0;
              bottom: 0;
              margin: auto;
              z-index: 2;
              background-color: var(--color-dark-white);
              border: 1px solid var(--color-light-gray);
            }

            &.is-active:before {
              background-color: var(--color-primary);
            }
          }
        }
        
        .el-menu-item:hover, .el-submenu__title:hover {
          background-color: var(--color-extra-light-gray);
        }
      }
    }
  }
</style>

<script>
  import Ps from 'perfect-scrollbar'
  import 'perfect-scrollbar/dist/css/perfect-scrollbar.css'

  export default {
    name: 'sidebar',
    props: ['collapse'],
    data() {
      return {
        isOpen: false
      }
    },
    watch: {
      collapse: function() {
        if (this.collapse) {
          Ps.destroy(this.$el)
        } else {
          this.initScoll()
        }
      }
    },
    mounted: function() {
      this.initScoll()
    },
    methods: {
      initScoll: function() {
        Ps.initialize(this.$el, {
          suppressScrollX: true
        })
      }
    }
  }
</script>