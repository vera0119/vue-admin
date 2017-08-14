<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Linear progress bar (external percentage)</div>
          <el-progress :percentage="0"></el-progress>
          <el-progress :percentage="70"></el-progress>
          <el-progress :percentage="100" status="success"></el-progress>
          <el-progress :percentage="50" status="exception"></el-progress>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Linear progress bar (internal percentage)</div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Circular progress bar</div>
          <el-progress type="circle" :percentage="0"></el-progress>
          <el-progress type="circle" :percentage="25"></el-progress>
          <el-progress type="circle" :percentage="100" status="success"></el-progress>
          <el-progress type="circle" :percentage="50" status="exception"></el-progress>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .el-progress {
    margin-bottom: 10px;
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