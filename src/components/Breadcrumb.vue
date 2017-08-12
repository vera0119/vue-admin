<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="route in routes" v-if="route.meta.label" :key="route.name" :to="route.name">
      {{ route.meta.label }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style>
  .el-breadcrumb {
    padding: 10px 15px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);

    &:before {
      display: inline;
    }
  }
</style>

<script>
  export default {
    name: 'breadcrumb',
    props: {
      routes: {
        type: Array,
        required: true,
        default: () => []
      }
    }
  }
</script>