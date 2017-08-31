<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-button plain @click="open">Closes automatically</el-button>
          <el-button plain @click="open2">Won't close automatically</el-button>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">With types</div>
          <el-button plain @click="open3('success')">Success</el-button>
          <el-button plain @click="open3('warning')">Warning</el-button>
          <el-button plain @click="open3('info')">Info</el-button>
          <el-button plain @click="open3('error')">Error</el-button>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">With offset</div>
          <el-button plain @click="open4">Notification with offsety</el-button>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Global method</div>
          <el-button plain @click="openAll">Open All</el-button>
          <el-button plain @click="closeAll">Close All</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { Notification } from 'element-ui'

  export default {
    data() {
      return {
        info: null,
        warning: null
      }
    },
    methods: {
      open() {
        const h = this.$createElement
        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        })
      },
      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        })
      },
      open3(type) {
        this.$notify({
          title: `${type[0].toUpperCase()}${type.slice(1)}`,
          message: `This is a ${type} message`,
          type: type
        })
      },
      open4() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          offset: 100
        })
      },
      openAll() {
        this.info = Notification.info({
          message: 'This is a info message',
          onClose: () => {
            this.$message.info('close')
          }
        })

        setTimeout(() => {
          this.warning = Notification.warning('This is a warning message')
        }, 0)
      },
      closeAll() {
        this.info.close()
        this.warning.close()
      }
    }
  }
</script>