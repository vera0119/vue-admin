<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-tag v-for="tag in tags" :key="tag.name" :type="tag.type">{{tag.name}}</el-tag>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Removable Tag</div>
          <el-tag v-for="tag in tags" :key="tag.name" :type="tag.type" :closable="true" :hit="true"
            :close-transition="false" @close="handleClose(tag)">
            {{tag.name}}
          </el-tag>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="box-card m-b">
          <div slot="header">Edit Dynamically</div>
          <el-tag v-for="tag in tags" :key="tag.name" :closable="true" :type="tag.type" @close="handleClose(tag)">{{tag.name}}</el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="mini"
            @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .el-tag {
    margin-right: 10px;
  }

  .input-new-tag {
    width: 150px;
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