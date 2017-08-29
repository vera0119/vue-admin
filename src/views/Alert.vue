<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-alert title="success alert" type="success" class="m-b"></el-alert>
          <el-alert title="info alert" type="info" class="m-b"></el-alert>
          <el-alert title="warning alert" type="warning" class="m-b"></el-alert>
          <el-alert title="error alert" type="error" class="m-b"></el-alert>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">With icon</div>
          <el-alert title="success alert" type="success" show-icon class="m-b"></el-alert>
          <el-alert title="info alert" type="info" show-icon class="m-b"></el-alert>
          <el-alert title="warning alert" type="warning" show-icon class="m-b"></el-alert>
          <el-alert title="error alert" type="error" show-icon class="m-b"></el-alert>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Customizable close button</div>
          <el-alert title="unclosable alert" type="success" :closable="false" class="m-b"></el-alert>
          <el-alert title="customized close-text" type="info" close-text="Gotcha" class="m-b"></el-alert>
          <el-alert title="warning alert" type="warning" @close="hello" class="m-b"></el-alert>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">With description</div>
          <el-alert title="with description" type="success" description="This is a description." class="m-b"></el-alert>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">With icon and description</div>
          <el-alert title="success alert" type="success" description="more text description" show-icon class="m-b"></el-alert>
          <el-alert title="info alert" type="info" description="more text description" show-icon class="m-b"></el-alert>
          <el-alert title="warning alert" type="warning" description="more text description" show-icon class="m-b"></el-alert>
          <el-alert title="error alert" type="error" description="more text description" show-icon class="m-b"></el-alert>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style></style>

<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!')
      }
    }
  }
</script>