<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-button :plain="true" @click="open">Show message</el-button>
          <el-button :plain="true" @click="openVn">VNode</el-button>
          <el-button :plain="true" @click="openVn2">VNode2</el-button>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Types</div>
          <el-button :plain="true" @click="open2">success</el-button>
          <el-button :plain="true" @click="open3">warning</el-button>
          <el-button :plain="true" @click="open">message</el-button>
          <el-button :plain="true" @click="open4">error</el-button>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Closable</div>
          <el-button :plain="true" @click="open5">message</el-button>
          <el-button :plain="true" @click="open6">success</el-button>
          <el-button :plain="true" @click="open7">warning</el-button>
          <el-button :plain="true" @click="open8">error</el-button>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Customizations</div>
          <el-button :plain="true" @click="open9">iconClass</el-button>
          <el-button :plain="true" @click="open10">onClose</el-button>
          <el-button :plain="true" @click="open11">open</el-button>
          <el-button :plain="true" @click="close11">close</el-button>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Global method</div>
          <el-button :plain="true" @click="openAll">openAll</el-button>
          <el-button :plain="true" @click="closeAll">closeAll</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style></style>

<script>
  import { Message } from 'element-ui'

  export default {
    data() {
      return {
        message: null
      }
    },
    methods: {
      open() {
        this.$message('This is a message.')
      },
      openVn() {
        const h = this.$createElement
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        })
      },
      openVn2() {
        this.$message({
          message: (
            <p>
              <span>Message can be </span>
              <i style="color: red">VNode</i>
            </p>
          )
        })
      },
      open2() {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        })
      },
      open3() {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        })
      },
      open4() {
        this.$message.error('Oops, this is a error message.')
      },
      open5() {
        this.$message({
          showClose: true,
          message: 'This is a message.'
        })
      },
      open6() {
        this.$message({
          showClose: true,
          message: 'Congrats, this is a success message.',
          type: 'success'
        })
      },
      open7() {
        this.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning'
        })
      },
      open8() {
        this.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error'
        })
      },
      open9() {
        this.$message({
          message: 'This is a message.',
          iconClass: 'text-info fa fa-exclamation-triangle'
        })
      },
      open10() {
        this.$message({
          showClose: true,
          message: 'This is a message.',
          onClose() {
            alert('onClose')
          }
        })
      },
      open11() {
        this.message = this.$message({
          message: 'This is a message.',
          duration: 60000
        })
      },
      close11() {
        this.message.close()
      },
      openAll() {
        Message.warning('Warning, this is a warning message.')

        Message('This is a message.')
      },
      closeAll() {
        Message.closeAll()
      }
    }
  }
</script>