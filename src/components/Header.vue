<template>
  <nav class="navbar navbar-fixed-top">
    <div class="navbar-header pull-left">
      <a href="#" class="navbar-brand">
        <img src="~@/assets/images/logo.png" alt="logo" width="35" height="35">
        <span>Vue.js</span>
      </a>
    </div>
    <div class="sidebar-collapse" @click="toggleSidebar" :class="{active: collapse}">
      <i class="fa fa-bars"></i>
    </div>
    <div class="account-area">
      <el-dropdown>
        <a class="el-dropdown-link">
          <img src="~@/assets/images/avatars/a1.png" alt="avatar" class="avatar hidden-xs">
          <span class="username">admin</span>
          <i class="fa fa-caret-down"></i>
          <i class="fa fa-user-o"></i>
        </a>
        <el-dropdown-menu slot="dropdown" style="margin-top: 0; width:160px;">
          <el-dropdown-item><i class="fa fa-fw fa-user-o"></i>Your Profile</el-dropdown-item>
          <el-dropdown-item><i class="fa fa-fw fa-cog"></i>Settings</el-dropdown-item>
          <el-dropdown-item><i class="fa fa-fw fa-question-circle-o"></i>Help</el-dropdown-item>
          <el-dropdown-item divided></el-dropdown-item>
          <el-dropdown-item><i class="fa fa-fw fa-sign-out"></i>Sign out</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </nav>
</template>

<style>
  @import "../css/variables.css";
  .navbar {
    height: var(--navbar-height);
    width: 100%;
    color: #fff;
    background-color: var(--color-primary);
    box-sizing: border-box;
    padding: 0 15px;
    
    .fa {
      font-size: 18px;
    }

    a.navbar-brand {
      text-decoration: none;
      color: #fff;
    }

    .navbar-brand {
      display: inline-block;
      width: 180px;

      img {
        border: 0;
      }

      img, span {
        vertical-align: middle;
        line-height: var(--navbar-height);
      }
    }

    .sidebar-collapse {
      float: left;
      vertical-align: middle;
      line-height: var(--navbar-height);
      width: 35px;
      text-align: center;
      cursor: pointer;

      &.active, &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, .2)
      }
    }

    @media (max-width: 768px) {
      & {
        padding-left: 0;
      }

      .navbar-brand {
        display: none;
      }

      .sidebar-collapse {
        width: var(--sidebar-collapse-width);
      }
    }

    .account-area {
      float: right;
      height: 100%;
      margin-right: -15px;
      padding-right: 15px;
      
      .fa-user-o {
        display: none;
      }

      .avatar {
        height: 38px;
        border-radius: 50%;
      }

      .avatar, .username, .fa {
        line-height: var(--navbar-height);
        vertical-align: middle;
      }

      .el-dropdown-link {
        color: #fff;
        cursor: pointer;
        display: inline-block;
        height: var(--navbar-height);
        padding: 0 15px;

        &:hover {
          background-color: color(var(--color-primary) blackness(4%));
        }
      }

      @media (max-width: 768px) {
        .avatar, .username, .fa-caret-down {
          display: none;
        }

        .fa-user-o {
          display: inline-block;
        }
      }
    }
  }

  .navbar-fixed-top {
    position: fixed;
    z-index: 1000;
  }
</style>

<script>
export default {
  name: 'header',
  props: ['collapse'],
  methods: {
    toggleSidebar() {
      this.$emit('update:collapse', !this.collapse)
    }
  }
}
</script>