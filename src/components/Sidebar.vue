<template>
  <div class="sidebar sidebar-fixed ps ps--theme_default" :class="{'collapse': collapse}">
    <el-menu :default-active="$route.name" :collapse="collapse" :router="true" ref="menu">
      <template v-for="item in list" v-if="item.children == null">
        <el-menu-item :index="item.name" :route="item">
          <i :class="item.icon"></i>
          <span slot="title">{{item.meta.label}}</span>
        </el-menu-item>
      </template>
      <template :for="item in list" v-else>
        <el-submenu :index="item.name" ref="submenu">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.meta.label}}</span>
          </template>
          <template v-for="item in item.children">
            <template v-if="item.group">
              <el-menu-item-group>
                <template slot="title">{{item.group}}</template>
                <el-menu-item v-for="item in item.values" :key="item.name" :index="item.name" :route="item">{{item.meta.label}}</el-menu-item>
              </el-menu-item-group>
            </template>
            <template v-else>
              <el-menu-item v-for="item in item.values" :key="item.name" :index="item.name" :route="item">{{item.meta.label}}</el-menu-item>
            </template>
          </template>
         </el-submenu>
      </template>
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

      &.collapse > .el-menu {
        & .el-submenu .el-menu {
          position: fixed;
          top: var(--navbar-height);
          left: var(--sidebar-collapse-width);
        }
      }

      &:not(.collapse) {
        > .el-menu .el-submenu .el-menu {
          top: 0 !important;
          bottom: initial !important;
        }
      }

      .el-menu-item .fa, .el-submenu .fa {
        vertical-align: baseline;
        margin-right: 10px;
      }

      > .el-menu {
        background-color: #fff;
        transition: initial;
        width: var(--sidebar-width);

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

  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'sidebar',
    props: ['collapse'],
    data() {
      return {
        isOpen: false
      }
    },
    watch: {
      collapse() {
        if (this.collapse) {
          this.scrollSubmenu()
        }
      }
    },
    created() {
      this.getList(this.$router)
    },
    mounted() {
      Ps.initialize(this.$el, {
        suppressScrollX: true
      })

      this.$refs.menu.$watch('openedMenus', () => {
        this.$nextTick(() => {
          this.scrollSubmenu()
          this.positionSubmenu()
        })
      }, { deep: true, immediate: true })
    },
    computed: {
      ...mapState('menu', {
        list: state => state.list
      })
    },
    methods: {
      ...mapActions('menu', {
        getList: 'getList'
      }),
      positionSubmenu() {
        let submenus = this.$refs.menu.$children
        for (let submenu of submenus) {
          if (submenu.opened) {
            let psEl = submenu.$el.querySelector('.el-menu')
            let maxHeight = this.$el.offsetHeight - submenu.$el.offsetTop + submenu.$el.scrollHeight
            if (maxHeight < psEl.scrollHeight) {
              psEl.style.bottom = '5px'
            }
            psEl.style.top = submenu.$el.offsetTop - this.$el.scrollTop + this.$el.offsetTop + 'px'
          }
        }
      },
      scrollSubmenu: function() {
        let submenus = this.$refs.menu.$children
        for (let submenu of submenus) {
          if (submenu.opened) {
            if (!submenu.psEl) {
              submenu.psEl = submenu.$el.querySelector('.el-menu')
              Ps.initialize(submenu.psEl, {
                suppressScrollX: true
              })
            }

            if (submenu.psEl.classList) {
              if (!submenu.psEl.classList.contains('ps')) {
                submenu.psEl.classList.add('ps', 'ps--theme_default')
              }
            } else {
              if (submenu.psEl.className.indexOf('ps') === -1) {
                submenu.psEl.className += ' ps ps--theme_default'
              }
            }
          }
        }
      }
    }
  }
</script>