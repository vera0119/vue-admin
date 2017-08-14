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
  export default {
    methods: {
      handleSizeChange: function(val) {
        this.getData(1, val)
      },
      handleCurrentChange: function(val) {
        this.getData(val, this.pageSize)
      },
      getData: function(currentPage, pageSize) {
        const data = [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]

        this.currentPage = currentPage
        this.pageSize = pageSize
        this.tableData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        this.tableData.total = data.length
      }
    },
    mounted: function() {
      this.getData(this.currentPage, this.pageSize)
    },
    data() {
      return {
        currentPage: 1,
        pageSize: 2,
        tableData: []
      }
    }
  }
</script>