<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-switch v-model="value1" on-text="" off-text=""></el-switch>
          <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949"></el-switch>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Extended value types</div>
          <el-tooltip :content="'Switch value: ' + value3" placement="top">
            <el-switch v-model="value3" on-color="#13ce66" off-color="#ff4949" on-value="100" off-value="0" @change="onChange"></el-switch>
          </el-tooltip>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Disabled</div>
          <el-switch v-model="value4" on-text="" off-text="" disabled></el-switch>
          <el-switch v-model="value4" disabled></el-switch>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
        value3: 100,
        value4: true
      }
    },
    methods: {
      onChange(value) {
        this.$message.info({
          message: value
        })
      }
    }
  }
</script>