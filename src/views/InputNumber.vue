<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Disabled</div>
          <el-input-number v-model="num1" :min="1" :max="10" :disabled="true"></el-input-number>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Steps</div>
          <el-input-number v-model="num2" :step="2"></el-input-number>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Controls</div>
          <el-input-number v-model="num2" :controls="false"></el-input-number>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Size</div>
          <el-input-number v-model="num1" size="large"></el-input-number>
          <div class="m-b"></div>
          <el-input-number v-model="num1"></el-input-number>
          <div class="m-b"></div>
          <el-input-number v-model="num1" size="small"></el-input-number>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1
      }
    },
    methods: {
      handleChange(value) {
        this.$message({
          message: value
        })
      }
    }
  }
</script>