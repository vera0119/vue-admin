<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-select v-model="value" placeholder="Select" v-on:change="onChange">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Disabled option</div>
          <el-select v-model="value" placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Disabled select</div>
          <el-select v-model="value" placeholder="Select" disabled>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Clearable single select</div>
          <el-select v-model="value" placeholder="Select" clearable>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic multiple select</div>
          <el-select v-model="value2" placeholder="Select" multiple>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Custom template</div>
          <el-select v-model="value" placeholder="Select" clearable>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Grouping</div>
          <el-select v-model="value3" placeholder="Select">
            <el-option-group v-for="group in options2" :key="group.label" :label="group.label">
              <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-option-group>
          </el-select>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Option filtering</div>
          <el-select v-model="value" placeholder="Select" filterable>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Remote Search</div>
          <el-select v-model="value4" placeholder="Please enter a keyword" filterable remote :remote-method="remoteMethod" :loading="loading">
            <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Create new items</div>
          <el-select v-model="value5" placeholder="Choose tags for your articled" multiple filterable allow-create>
            <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    data() {
      return {
        options3: [],
        value: '',
        value2: [],
        value3: '',
        value4: '',
        value5: [],
        loading: false
      }
    },
    computed: {
      ...mapState('select', {options: 'options1', 'options2': 'options2', 'options4': 'options4'})
    },
    methods: {
      ...mapActions('select', ['getOptions1', 'getOptions2', 'getOptions4']),
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true

          this.getOptions1().then(() => {
            this.loading = false

            this.options3 = this.options.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            })
          })
        } else {
          this.options3 = []
        }
      },
      onChange(selected) {
        this.$message.info({
          message: selected
        })
      }
    },
    created() {
      this.getOptions1()
      this.getOptions2()
      this.getOptions4()
    }
  }
</script>