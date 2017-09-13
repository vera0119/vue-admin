<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-time-select v-model="value1" :picker-options="options" placeholder="Select time"></el-time-select>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Arbitrary time picker</div>
          <el-time-picker v-model="value2" :picker-options="options2" placeholder="Arbitrary time"></el-time-picker>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Fixed time range</div>
          <el-time-select v-model="startTime" ref="startTime" :picker-options="options" placeholder="Start time"></el-time-select>
          <el-time-select v-model="endTime" :picker-options="options3" placeholder="End time"></el-time-select>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Arbitrary time range</div>
          <el-time-picker is-range v-model="value3" placeholder="Pick a time range"></el-time-picker>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          start: '08:30',
          step: '00:15',
          end: '18:30'
        },
        options2: {
          selectableRange: '18:30:00 - 20:30:00'
        },
        value1: '',
        value2: new Date(2016, 9, 10, 18, 40),
        startTime: '',
        endTime: '',
        value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      }
    },
    computed: {
      options3() {
        return {
          start: '08:30',
          step: '00:15',
          end: '18:30',
          minTime: this.startTime
        }
      }
    }
  }
</script>