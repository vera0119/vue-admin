<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-tree :data="data" :props="props" @node-click="handleNodeClick"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Selectable</div>
          <el-tree :props="props2" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Disabled checkbox</div>
          <el-tree :data="data2" :props="props" show-checkbox @check-change="handleCheckChange"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Default expanded and default checked</div>
          <el-tree :data="data2" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="props"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">
            Checking tree nodes
            <el-button size="mini" @click="getCheckedNodes">get by node</el-button>
            <el-button size="mini" @click="getCheckedKeys">get by key</el-button>
            <el-button size="mini" @click="setCheckedNodes">set by node</el-button>
            <el-button size="mini" @click="setCheckedKeys">set by key</el-button>
            <el-button size="mini" @click="resetChecked">reset</el-button>
          </div>
          <el-tree :data="data2" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="props"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Custom node content</div>
          <el-tree :data="data2" :props="props" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Tree node filtering</div>
          <el-input placeholder="Filter keyword" v-model="filterText" class="m-b">
          </el-input>
          <el-tree :data="data" :props="props" default-expand-all :filter-node-method="filterNode" ref="tree2"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Accordion</div>
          </el-input>
          <el-tree :data="data" :props="props" accordion @node-click="handleNodeClick"></el-tree>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  let id = 1000

  export default {
    data() {
      return {
        count: 1,
        filterText: ''
      }
    },
    computed: mapState('tree', ['data', 'data2', 'props', 'props2']),
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val)
      }
    },
    created() {
      this.$store.dispatch('tree/getData')
      this.$store.dispatch('tree/getData2')
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate)
      },
      async loadNode(node, resolve) {
        const data = await this.$store.dispatch('tree/getData3', node.data)
        resolve(data)
      },
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes())
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys())
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 1
        }, {
          id: 6
        }])
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3])
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([])
      },
      append(store, data) {
        store.append({ id: id++, label: 'testtest', children: [] }, data)
      },
      remove(store, data) {
        store.remove(data)
      },
      renderContent(h, { node, data, store }) {
        return (
          <span>
            <span>
              <span>{node.label}</span>
            </span>
            <span style="float: right; margin-right: 20px">
              <el-button size="mini" on-click={ () => this.append(store, data) }>Append</el-button>
              <el-button size="mini" on-click={ () => this.remove(store, data) }>Delete</el-button>
            </span>
          </span>
        )
      },
      filterNode(value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      }
    }
  }
</script>