<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-checkbox v-model="checked">Option</el-checkbox>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Disabled State</div>
          <el-checkbox v-model="checked1" disabled>Option</el-checkbox>
          <el-checkbox v-model="checked2" disabled>Option</el-checkbox>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Checkbox group</div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="Option A"></el-checkbox>
            <el-checkbox label="Option B"></el-checkbox>
            <el-checkbox label="Option C"></el-checkbox>
            <el-checkbox label="disabled" disabled></el-checkbox>
            <el-checkbox label="selected and disabled" disabled></el-checkbox>
          </el-checkbox-group>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Indeterminate</div>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="m-b">Check all</el-checkbox>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Minimum / Maximum items checked</div>
          <el-checkbox-group v-model="checkedCities1" :min="1" :max="2">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Button style</div>
          <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
          <div class="m-b"></div>
          <el-checkbox-group v-model="checkboxGroup2" size="small">
            <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Shenzhen'" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
          <div class="m-b"></div>
          <el-checkbox-group v-model="checkboxGroup3" size="large" fill="#324057" text-color="#a4aebd" :min="1" :max="3">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
        checked1: false,
        checked2: true,
        checkList: ['selected and disabled', 'Option A'],
        checkAll: true,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
        isIndeterminate: true,
        checkedCities1: ['Shanghai', 'Beijing'],
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Beijing'],
        checkboxGroup3: ['Guangzhou']
      }
    },
    methods: {
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? this.cities : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    }
  }
</script>