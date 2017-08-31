<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">
            Loading inside a container
            <el-button @click="loadData" type="primary" size="mini">load data</el-button>
          </div>
          <el-table :data="tableData" v-loading.body="loading" style="height: 201px;">
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column prop="name" label="Name" width="140"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">
            Loading text
            <el-button @click="loadData" type="primary" size="mini">load data</el-button>
          </div>
          <el-table :data="tableData" v-loading.body="loading" element-loading-text="Loading..." style="height: 201px;">
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column prop="name" label="Name" width="140"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15" ref="loading">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Full screen loading</div>
          <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">Full screen loading for 1 seconds</el-button>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Service</div>
          <el-button type="primary" @click="open1">Loading with Service</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>  
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { Loading } from 'element-ui'

  export default {
    computed: {
      ...mapGetters('table', ['tableData'])
    },
    data() {
      return {
        loading: false,
        fullscreenLoading: false
      }
    },
    methods: {
      ...mapActions('table', ['getTableData']),
      async loadData() {
        this.loading = true
        await this.getTableData()
        this.loading = false
      },
      openFullScreen() {
        this.fullscreenLoading = true
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 1000)
      },
      open1() {
        let loadingInstance = Loading.service({ target: this.$refs.loading.$el })
        setTimeout(() => loadingInstance.close(), 1000)
      }
    },
    mounted() {
      this.open1()
      this.loadData()
    }
  }
</script>