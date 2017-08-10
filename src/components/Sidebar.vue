<template>
  <el-menu default-active="3" :collapse="collapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-message"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
</template>
<style>
  @import "../css/variables.css";
  
  .navbar-fixed-top ~ .el-menu {
    top: var(--navbar-height);
  }
  

  .app > .el-menu {
    &:not(.el-menu--collapse) {
      width: var(--sidebar-width);
    }

    &:before {
      content: "";
      position: fixed;
      top: 0;
      bottom: 0;
      width: 230px;
      background-color: #fff;
      min-height: 100%;
      box-shadow: 0 0 10px rgba(0,0,0,.2);
    }

    &.el-menu--collapse, &.el-menu--collapse:before {
      width: 54px;
    }
  }
</style>

<script>
export default {
  name: 'sidebar',
  props: ['collapse']
}
</script>