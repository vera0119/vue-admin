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
          <span class="heartbit">
          <i class="fa fa-bell-o"></i>
        </span>
        </a>
        <el-dropdown-menu slot="dropdown" class="notification">
          <el-dropdown-item disabled class="title">You have 3 new notifications.</el-dropdown-item>
          <el-dropdown-item divided></el-dropdown-item>
          <el-dropdown-item>
            <el-row>
              <el-col :span="4">
                <span class="fa-stack fa-lg text-info text-xs">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-info fa-stack-1x"></i>
                </span>
              </el-col>
              <el-col :span="20">
                <h5 class="m-y-0">3 New Followers</h5>
                <p class="text-muted text-xs">
                  <span>4 minutes ago</span>
                </p>
              </el-col>
            </el-row>
          </el-dropdown-item>
          <el-dropdown-item divided></el-dropdown-item>
          <el-dropdown-item>
            <el-row>
              <el-col :span="4">
                <span class="fa-stack fa-lg text-success text-xs">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-check fa-stack-1x"></i>
                </span>
              </el-col>
              <el-col :span="20">
                <h5 class="m-y-0">Server Rebooted</h5>
                <p class="text-muted text-xs m-y-0">
                  <span>15 minutes ago</span>
                </p>
              </el-col>
            </el-row>
          </el-dropdown-item>
          <el-dropdown-item divided></el-dropdown-item>
          <el-dropdown-item>
            <el-row>
              <el-col :span="4">
                <span class="fa-stack fa-lg text-warning text-xs">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-exclamation fa-stack-1x"></i>
                </span>
              </el-col>
              <el-col :span="20">
                <h5 class="m-y-0">Your password was recently updated. Please complete your security questions from your profile page. </h5>
                <p class="text-muted text-xs m-y-0">
                  <span>20 minutes ago</span>
                </p>
              </el-col>
            </el-row>
          </el-dropdown-item>
          <el-dropdown-item divided></el-dropdown-item>
          <el-dropdown-item class="more">
            View all notifications<i class="m-l-5 fa fa-angle-right"></i>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
      
      .heartbit {
        position: relative;
        .fa {
          font-size: 14px;
        }
      }

      .heartbit:before {
        content: "";
        width: 5px;
        height: 5px;
        background: var(--color-danger);
        border-radius: 5px;
        position: absolute;
        top: 0;
        right: 0;
      }

      .heartbit:after {
        content: "";
        width: 21px;
        height: 21px;
        width: 0\9;
        height: 0\9;
        background: var(--color-danger);
        border-radius: 21px;
        position: absolute;
        top: -8px;
        right: -8px;
        animation: heartbit 1.5s infinite ease-out;
        transform: scale(0);
      }

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

  .notification {
    width: 250px;
    max-height: 310px;
    
    &.el-dropdown-menu {
      padding: 0;
      margin: 0;
    }

    .el-dropdown-menu__item {
      color: #333;
      line-height: calc(20/14);
      font-size: 14px;
      font-weight: normal;
      padding: 10px;

      &:hover {
        color: #333;
      }

      &.el-dropdown-menu__item--divided {
        margin: 0;
        padding: 0 10px;
        &:before {
          height: 0;
        }
      }

      &.title {
        background-color: var(--dropdown-menuItem-hover-fill);
      }

      &.more {
        color: var(--color-primary);
        text-align: center;
        background-color: var(--dropdown-menuItem-hover-fill);
        i {
          margin-left: 5px;
        }
      }
    }

    h5 {
      font-size: 14px;
      margin: 0;
      font-weight: normal;
    }

    p {
      margin: 0;
    }
  }

  @keyframes heartbit {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    25% {
      opacity: 0.4;
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
</style>

<script>
  import Ps from 'perfect-scrollbar'
  import 'perfect-scrollbar/dist/css/perfect-scrollbar.css'

  export default {
    name: 'header',
    props: ['collapse'],
    mounted: function() {
      this.initScoll()
    },
    methods: {
      toggleSidebar() {
        this.$emit('update:collapse', !this.collapse)
      },
      initScoll: function() {
        Ps.initialize(this.$el.querySelector('.notification'), {
          suppressScrollX: true
        })
      }
    }
  }
</script>