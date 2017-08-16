<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Selectable</div>
          <el-tree :data="regions" :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Disabled checkbox</div>
          <el-tree :data="data3" :props="defaultProps" show-checkbox @check-change="handleCheckChange"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Default expanded and default checked</div>
          <el-tree :data="data3" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps"></el-tree>
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
          <el-tree :data="data3" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Custom node content</div>
          <el-tree :data="data3" :props="defaultProps" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Tree node filtering</div>
          <el-input placeholder="Filter keyword" v-model="filterText" class="m-b">
          </el-input>
          <el-tree :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree2"></el-tree>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Accordion</div>
          </el-input>
          <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  let id = 1000

  export default {
    data() {
      return {
        data: [{
          label: 'Level one 1',
          children: [{
            label: 'Level two 1-1',
            children: [{
              label: 'Level three 1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          children: [{
            label: 'Level two 2-1',
            children: [{
              label: 'Level three 2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            children: [{
              label: 'Level three 2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          children: [{
            label: 'Level two 3-1',
            children: [{
              label: 'Level three 3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            children: [{
              label: 'Level three 3-2-1'
            }]
          }]
        }],
        regions: [{
          'name': 'region1'
        }, {
          'name': 'region2'
        }],
        data3: [{
          id: 1,
          label: 'Level one 1',
          children: [{
            id: 3,
            label: 'Level two 2-1',
            children: [{
              id: 4,
              label: 'Level three 3-1-1'
            }, {
              id: 5,
              label: 'Level three 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: 'Level two 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: 'Level three 3-2-1'
            }, {
              id: 7,
              label: 'Level three 3-2-2',
              disabled: true
            }]
          }]
        }],
        count: 1,
        defaultProps: {
          children: 'children',
          label: 'label',
          disabled: 'disabled'
        },
        props: {
          label: 'name',
          children: 'zones'
        },
        filterText: ''
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val)
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate)
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'Root1' }, { name: 'Root2' }])
        }
        if (node.level > 3) return resolve([])

        var hasChild
        if (node.data.name === 'region1') {
          hasChild = true
        } else if (node.data.name === 'region2') {
          hasChild = false
        } else {
          hasChild = Math.random() > 0.5
        }

        setTimeout(() => {
          var data
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }]
          } else {
            data = []
          }

          resolve(data)
        }, 500)
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