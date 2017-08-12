<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import "./css/variables.css";

  html, body {
    margin: 0;
    padding: 0;
    font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.42857143;
    height: 100%;
    background-color: var(--color-light-white);
  }
</style>
