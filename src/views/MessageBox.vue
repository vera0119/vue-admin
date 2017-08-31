<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Alert</div>
          <el-button type="text" @click="open">Click to open the Message Box</el-button>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Confirm</div>
          <el-button type="text" @click="open2">Click to open the Message Box</el-button>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Prompt</div>
          <el-button type="text" @click="open3">Click to open Message Box</el-button>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Customization</div>
          <el-button type="text" @click="open4">Click to open Message Box</el-button>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Global method</div>
          <el-button type="text" @click="openAlert">Click to open Message Box</el-button>
          <el-button type="text" @click="openConfirm">Click to open Message Box</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { MessageBox } from 'element-ui'

  export default {
    methods: {
      open() {
        this.$alert('This is a message', 'Title', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      },
      open2() {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          })
        })
      },
      open3() {
        this.$prompt('Please input your e-mail', 'Tip', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Invalid Email'
        }).then(value => {
          this.$message({
            type: 'success',
            message: 'Your email is:' + value.value
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          })
        })
      },
      open4() {
        const h = this.$createElement
        this.$msgbox({
          title: 'Message',
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true
              instance.confirmButtonText = 'Loading...'
              setTimeout(() => {
                done()
                setTimeout(() => {
                  instance.confirmButtonLoading = false
                }, 300)
              }, 3000)
            } else {
              done()
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          })
        }, action => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          })
        })
      },
      openAlert() {
        MessageBox.alert('This is a message')
      },
      openConfirm() {
        MessageBox.confirm('This is a message')
      }
    }
  }
</script>