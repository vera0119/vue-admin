<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-radio class="radio" v-model="radio" label="1">optionA</el-radio>
          <el-radio class="radio" v-model="radio" label="2">optionB</el-radio>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Disabled</div>
          <el-radio disabled v-model="radio" label="1">optionA</el-radio>
          <el-radio disabled v-model="radio" label="2">optionB</el-radio>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Radio button group</div>
          <el-radio-group v-model="radio2">
            <el-radio v-for="option in options2" :key="option.label" :label="option.label">{{option.text}}</el-radio>
          </el-radio-group>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Button style</div>
          <div class="m-b">
            <el-radio-group v-model="radio2" size="small" @change="onChange">
              <el-radio-button v-for="option in options2" :key="option.label" :label="option.label">{{option.text}}</el-radio-button>
            </el-radio-group>
          </div>
          <div class="m-b">
            <el-radio-group v-model="radio2" size="small">
              <el-radio-button v-for="option in options2" :key="option.label" :label="option.label" :disabled="option.disabled">{{option.text}}</el-radio-button>
            </el-radio-group>
          </div>
          <div class="m-b">
            <el-radio-group v-model="radio2" size="small" :disabled="true">
              <el-radio-button v-for="option in options2" :key="option.label" :label="option.label">{{option.text}}</el-radio-button>
            </el-radio-group>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: '1',
        radio2: 2,
        options2: [{ label: '1', text: 'optionA' }, { label: '2', text: 'optionB', disabled: true }, { label: '3', text: 'optionC' }]
      }
    },
    methods: {
      onChange() {
        this.$message.info(this.radio2)
      }
    }
  }
</script>