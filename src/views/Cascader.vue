<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <div class="m-b">
            <div>Child options expand when clicked (default)</div>
            <el-cascader :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
          </div>
          <div>
            <div>Child options expand when hovered</div>
            <el-cascader :options="options" v-model="selectedOptions2" @change="handleChange" expand-trigger="hover"></el-cascader>
          </div>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Disabled option</div>
          <el-cascader :options="optionsWithDisabled"></el-cascader>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Display only the last level</div>
          <el-cascader :options="options" :show-all-levels="false"></el-cascader>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">With default value</div>
          <el-cascader :options="options" v-model="selectedOptions3"></el-cascader>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Change on select</div>
          <el-cascader :options="options" change-on-select></el-cascader>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Dynamically load child options</div>
          <el-cascader :options="options2" @active-item-change="handleItemChange" :props="props"></el-cascader>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Filterable</div>
          <div class="m-b">
            <div>Only options of the last level can be selected</div>
            <el-cascader placeholder="Try searching: Guide" :options="options" filterable></el-cascader>
          </div>
          <div class="m-b">
            <div>Options of all levels can be selected</div>
            <el-cascader placeholder="Try searching: Guide" :options="options" filterable change-on-select></el-cascader>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('cascader', ['options', 'optionsWithDisabled', 'options2'])
    },
    data() {
      return {
        props: {
          value: 'label',
          children: 'cities'
        },
        selectedOptions: [],
        selectedOptions2: [],
        selectedOptions3: ['component', 'data', 'tag']
      }
    },
    methods: {
      ...mapActions('cascader', ['getOptions', 'getOptionsWithDisabled', 'getOptions2']),
      handleChange(value) {
        console.log(value)
      },
      handleItemChange(val) {
        console.log('active item:', val)
        this.getOptions2(val)
      }
    },
    created() {
      this.getOptions()
      this.getOptionsWithDisabled()
      this.getOptions2()
    }
  }
</script>