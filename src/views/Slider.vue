<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <div class="m-b">
            <span class="demonstration">Default value</span>
            <el-slider v-model="value1" @change="onChange"></el-slider>
          </div>
          <div class="m-b">
            <span class="demonstration">Customized initial value</span>
            <el-slider v-model="value2"></el-slider>
          </div>
          <div class="m-b">
            <span class="demonstration">Hide Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
          </div>
          <div class="m-b">
            <span class="demonstration">Format Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
          </div>
          <div>
            <span class="demonstration">Disabled</span>
            <el-slider v-model="value5" disabled></el-slider>
          </div>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Discrete values</div>
          <div class="m-b">
            <span class="demonstration">Breakpoints not displayed</span>
            <el-slider v-model="value6" :step="10"></el-slider>
          </div>
          <div>
            <span class="demonstration">Breakpoints displayed</span>
            <el-slider v-model="value7" :step="10" show-stops></el-slider>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Slider with input box</div>
          <div>
            <span class="demonstration">Default value</span>
            <el-slider v-model="value8" show-input></el-slider>
          </div>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Range selection</div>
          <div>
            <span class="demonstration">Breakpoints not displayed</span>
            <el-slider v-model="value9" range show-stops :max="10"></el-slider>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Vertical mode</div>
          <div>
            <span class="demonstration">Default value</span>
            <el-slider v-model="value10" vertical height="200px"></el-slider>
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
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        value6: 0,
        value7: 0,
        value8: 0,
        value9: [4, 8],
        value10: 0
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100
      },
      onChange(value) {
        this.$message.info({ message: value })
      }
    }
  }
</script>