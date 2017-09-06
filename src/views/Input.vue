<template>
  <div>
    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Basic usage</div>
          <el-input placeholder="Please input" v-model="input"></el-input>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Disabled</div>
          <el-input placeholder="Please input" v-model="input" disabled></el-input>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Input with icon</div>
          <el-input placeholder="Please input" v-model="input" icon="search" :on-icon-click="handleIconClick"></el-input>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Textarea</div>
          <el-input placeholder="Please input" v-model="textarea" type="textarea" :rows="2"></el-input>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Autosize Textarea</div>
          <el-input placeholder="Please input" v-model="textarea" type="textarea" autosize class="m-b"></el-input>
          <el-input placeholder="Please input" v-model="textarea" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Mixed input</div>
          <el-input placeholder="Please input" v-model="input" class="m-b">
            <template slot="prepend">Http://</template>
          </el-input>
          <el-input placeholder="Please input" v-model="input" class="m-b">
            <template slot="append">.com</template>
          </el-input>
          <el-input placeholder="Please input" v-model="input">
            <el-select v-model="select" slot="prepend" placeholder="Select" style="width: 110px">
              <el-option label="Restaurant" value="1"></el-option>
              <el-option label="Order No." value="2"></el-option>
              <el-option label="Tel" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="search"></el-button>
          </el-input>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Sizes</div>
          <el-input placeholder="Please input" v-model="input" size="large" class="m-b"></el-input>
          <el-input placeholder="Please input" v-model="input" class="m-b"></el-input>
          <el-input placeholder="Please input" v-model="input" size="small" class="m-b"></el-input>
          <el-input placeholder="Please input" v-model="input" size="mini"></el-input>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Autocomplete</div>
          <el-autocomplete class="inline-input" placeholder="Please Input" v-model="input" :fetch-suggestions="querySearch" 
            @select="handleSelect">
          </el-autocomplete>
          <el-autocomplete class="inline-input" placeholder="Please Input" v-model="input" :fetch-suggestions="querySearch" 
            @select="handleSelect" :trigger-on-focus="false">
          </el-autocomplete>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15">
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Custom template</div>
          <el-autocomplete class="inline-input" placeholder="Please Input" v-model="input" :fetch-suggestions="querySearch" 
            @select="handleSelect" icon="edit" :on-icon-click="handleIconClick" custom-item="my-item-en">
          </el-autocomplete>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card class="box-card m-b">
          <div slot="header">Remote search</div>
          <el-autocomplete class="inline-input" placeholder="Please Input" v-model="input" :fetch-suggestions="querySearchAsync" 
            @select="handleSelect">
          </el-autocomplete>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Vue from 'vue'

  Vue.component('my-item-en', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item
      return h('li', ctx.data, [
        h('div', { attrs: { class: 'value' } }, [item.value]),
        h('span', { attrs: { class: 'link' } }, [item.link])
      ])
    },
    props: {
      item: { type: Object, required: true }
    }
  })
  
  export default {
    data() {
      return {
        links: [
          { 'value': 'vue', 'link': 'https://github.com/vuejs/vue' },
          { 'value': 'element', 'link': 'https://github.com/ElemeFE/element' },
          { 'value': 'cooking', 'link': 'https://github.com/ElemeFE/cooking' },
          { 'value': 'mint-ui', 'link': 'https://github.com/ElemeFE/mint-ui' },
          { 'value': 'vuex', 'link': 'https://github.com/vuejs/vuex' },
          { 'value': 'vue-router', 'link': 'https://github.com/vuejs/vue-router' },
          { 'value': 'babel', 'link': 'https://github.com/babel/babel' }
        ],
        input: '',
        textarea: '',
        select: '',
        timeout: null
      }
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev)
      },
      querySearch(queryString, cb) {
        const links = this.links
        let results = queryString ? links.filter(this.createFilter(queryString)) : links

        cb(results)
      },
      handleSelect(item) {
        console.log(item)
      },
      createFilter(queryString) {
        return (link) => link.value.indexOf(queryString.toLowerCase()) === 0
      },
      querySearchAsync(queryString, cb) {
        const links = this.links
        let results = queryString ? links.filter(this.createFilter(queryString)) : links

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 1000 * Math.random())
      }
    }
  }
</script>