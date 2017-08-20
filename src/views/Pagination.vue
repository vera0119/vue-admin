<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-pagination layout="prev, pager, next" :total="150"></el-pagination>
        </el-card>
      </el-col>
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Small Pagination</div>
          <el-pagination layout="prev, pager, next" :total="150" small></el-pagination>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Total item count</div>
          <el-pagination layout="prev, pager, next, total" :total="150"></el-pagination>
        </el-card>
      </el-col>
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Change page size</div>
          <el-pagination layout="sizes, prev, pager, next" :total="150" :page-size="20" :page-sizes="[10, 20, 30, 40]"></el-pagination>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Jump to</div>
          <el-pagination layout="prev, pager, next, jumper" :total="150" :current-page="2"></el-pagination>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">All combined</div>
          <el-pagination layout="prev, pager, next, total, sizes, jumper" :total="150" :page-size="20" :page-sizes="[10, 20, 30, 40]"></el-pagination>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Data Table</div>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column prop="name" label="Name" width="140"></el-table-column>
            <el-table-column prop="state" label="State" width="120"></el-table-column>
            <el-table-column prop="city" label="City" width="120"></el-table-column>
            <el-table-column prop="zip" label="Zip" width="120"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
          <el-pagination layout="prev, pager, next, total, sizes, jumper" :total="tableData.total" 
            :page-size.sync="pageSize" :page-sizes="[2, 4, 6, 8, 10]" :current-page.sync="currentPage"
            @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    methods: {
      handleSizeChange: function(val) {
        this.getData(1, val)
      },
      handleCurrentChange: function(val) {
        this.getData(val, this.pageSize)
      },
      getData: function(currentPage, pageSize) {
        this.currentPage = currentPage
        this.pageSize = pageSize
        this.$store.dispatch('table/getPageTableData', { pageSize, currentPage })
      }
    },
    mounted: function() {
      this.getData(this.currentPage, this.pageSize)
    },
    data() {
      return {
        currentPage: 1,
        pageSize: 2
      }
    },
    computed: {
      ...mapState('table', { tableData: 'pageTableData' })
    }
  }
</script>