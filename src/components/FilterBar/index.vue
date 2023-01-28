<template>
  <div class="filter-box" >
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item >
        <span class="title-style">{{title}}</span>
      </el-form-item>
      <el-form-item label="关键词">
        <el-input v-model="formInline.keyWord" placeholder="请输入关键词"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sendKeyWord">查询</el-button>
        <el-button @click="clearKeyWord">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  props:{
    title:{
      type:String,
      default:""
    }
  },
  data() {
    return {
      formInline: {
        keyWord: ""
      }
    }
  },
  methods: {
    sendKeyWord() {
      this.$emit("getKeyWord", this.formInline.keyWord)
    },
    clearKeyWord() {
      this.formInline.keyWord = ""
      this.sendKeyWord()
    }
  }
}
</script>

<style>
.filter-box {
  height: 70px;
  padding-right: 550px;
  width: 60%;
}
.title-style{
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;
}
</style>