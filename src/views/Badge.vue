<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-badge :value="12" class="item">
            <el-button size="small">comments</el-button>
          </el-badge>
          <el-badge :value="3" class="item">
            <el-button size="small">replies</el-button>
          </el-badge>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              Click Me<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                comments
                <el-badge class="mark" :value="12"/>
              </el-dropdown-item>
              <el-dropdown-item>
                replies
                <el-badge class="mark" :value="3"/>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Max value</div>
          <el-badge :value="200" :max="99" class="item">
            <el-button size="small">comments</el-button>
          </el-badge>
          <el-badge :value="100" :max="10" class="item">
            <el-button size="small">replies</el-button>
          </el-badge>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Customizations</div>
          <el-badge value="new" class="item">
            <el-button size="small">comments</el-button>
          </el-badge>
          <el-badge value="hot" class="item">
            <el-button size="small">replies</el-button>
          </el-badge>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Little red dot</div>
          <el-badge is-dot class="item">query</el-badge>
          <el-badge is-dot class="item">
            <el-button class="share-button" icon="share" type="primary"></el-button>
          </el-badge>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .mark {
    float: right;
    margin-top: 8px;
    line-height: 1;
  }

  .el-dropdown-menu {
    width: 150px;
    box-sizing: border-box;
  }
</style>

<script>
  export default {
    data() {
      return {
        inputVisible: false,
        inputValue: '',
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'gray' },
          { name: 'Tag 3', type: 'primary' },
          { name: 'Tag 4', type: 'success' },
          { name: 'Tag 5', type: 'warning' },
          { name: 'Tag 6', type: 'danger' }
        ]
      }
    },
    methods: {
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1)
      },
      showInput() {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },
      handleInputConfirm() {
        const types = ['', 'gray', 'primary', 'success', 'warning', 'danger']

        let inputValue = this.inputValue
        if (inputValue) {
          this.tags.push({name: inputValue, type: types[this.tags.length % types.length]})
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    }
  }
</script>