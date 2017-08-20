<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Basic table</div>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column prop="name" label="Name" width="140"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Striped table</div>
          <el-table :data="tableData" stripe>
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column prop="name" label="Name" width="140"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Table with border</div>
          <el-table :data="tableData" border>
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column prop="name" label="Name" width="140"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Table with status</div>
          <el-table :data="tableData" :row-class-name="tableRowClassName">
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column prop="name" label="Name" width="140"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Table with fixed columns and header</div>
          <el-table :data="tableData2" max-height="200">
            <el-table-column prop="date" label="Date" width="110" fixed></el-table-column>
            <el-table-column prop="name" label="Name" width="140"></el-table-column>
            <el-table-column prop="state" label="State" width="120"></el-table-column>
            <el-table-column prop="city" label="City" width="120"></el-table-column>
            <el-table-column prop="address" label="Address" width="300"></el-table-column>
            <el-table-column prop="zip" label="Zip" width="120" fixed="right"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Sorting</div>
          <el-table :data="tableData" :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column prop="date" label="Date" width="110" sortable></el-table-column>
            <el-table-column prop="name" label="Name" width="140"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">
            Single select
            <el-button type="primary" size="mini" @click="setCurrent(tableData[1])">Select 2nd row</el-button>
            <el-button type="primary" size="mini" @click="setCurrent()">Clear selection</el-button>
          </div>
          <el-table :data="tableData" highlight-current-row ref="singleTable" @current-change="handleCurrentChange">
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column prop="name" label="Name" width="140"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">
            Multiple select
            <el-button type="primary" size="mini" @click="toggleSelection(tableData)">Toggle selection</el-button>
            <el-button type="primary" size="mini" @click="toggleSelection()">Clear selection</el-button>
          </div>
          <el-table :data="tableData" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="45"></el-table-column>
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column prop="name" label="Name" width="110"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Filter</div>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="105"></el-table-column>
            <el-table-column prop="name" label="Name" width="80"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
            <el-table-column prop="tag" label="Tag" width="80"
              :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]"
              :filter-method="filterTag"
              filter-placement="bottom-end">
              <template scope="scope">
                <el-tag :type="scope.row.tag === 'Home' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Custom column template</div>
          <el-table :data="tableData">
            <el-table-column label="Date" width="160">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Name" width="140">
              <template scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>Name: {{ scope.row.name }}</p>
                  <p>Addr: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag>{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="Operations">
              <template scope="scope">
                <el-button size="small">Edit</el-button>
                <el-button size="small" type="danger">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Grouping table head</div>
          <el-table :data="tableData2" border height="328">
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column label="Delivery Info">
              <el-table-column prop="name" label="Name" width="140"></el-table-column>
              <el-table-column label="Address Info">
                <el-table-column prop="state" label="State" width="120"></el-table-column>
                <el-table-column prop="city" label="City" width="120"></el-table-column>
                <el-table-column prop="address" label="Address" width="300"></el-table-column>
                <el-table-column prop="zip" label="Zip" width="120"></el-table-column>
              </el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :md="12" :sm="24">
        <el-card class="box-card m-b">
          <div slot="header">Expandable row</div>
          <el-table :data="tableData2">
            <el-table-column type="expand">
              <template scope="props">
                <p>State: {{ props.row.state }}</p>
                <p>City: {{ props.row.city }}</p>
                <p>Address: {{ props.row.address }}</p>
                <p>Zip: {{ props.row.zip }}</p>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="Date" width="110"></el-table-column>
            <el-table-column prop="name" label="Name"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Summary row</div>
          <el-table :data="tableData3" border show-summary>
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="amount1" sortable label="Amount 1"></el-table-column>
            <el-table-column prop="amount2" sortable label="Amount 2"></el-table-column>
            <el-table-column prop="amount3" sortable label="Amount 3"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Summary row</div>
          <el-table :data="tableData3" border height="200" show-summary :summary-method="getSummaries">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="amount1" label="Cost 1 ($)"></el-table-column>
            <el-table-column prop="amount2" label="Cost 2 ($)"></el-table-column>
            <el-table-column prop="amount3" label="Cost 3 ($)"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        currentRow: null,
        multipleSelection: []
      }
    },
    computed: {
      ...mapState('table', ['tableData2', 'tableData3']),
      ...mapGetters('table', ['tableData'])
    },
    methods: {
      ...mapActions('table', ['getTableData', 'getTableData2', 'getTableData3']),
      tableRowClassName(row, index) {
        let color = ['text-primary', 'text-success', 'text-warning', 'text-danger']
        return color[index % color.length]
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row)
      },
      handleCurrentChange(val) {
        this.currentRow = val
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      filterTag(value, row) {
        return row.tag === value
      },
      getSummaries(param) {
        const { columns, data } = param
        const sums = []

        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total Cost'
            return
          }

          const values = data.map(item => Number(item[column.property]))

          if (!values.every(value => isNaN(value))) {
            sums[index] = '$ ' + values.reduce((prev, curr) => {
              return prev + curr
            }, 0)
          } else {
            sums[index] = ''
          }
        })

        return sums
      }
    },
    created() {
      this.getTableData2()
      this.getTableData3()
    }
  }
</script>