<template>
  <div class="info-box">
    <el-card class="card-box">
      <span class="title-style">学生信息:</span>
      <el-descriptions
        :column="2"
        style="font-size: 18px; width: 1000px; margin-left: 130px;margin-top:20px"
      >
        <el-descriptions-item label="学生名">{{tableData.name}}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{tableData.phone}}</el-descriptions-item>
        <el-descriptions-item label="年龄">{{tableData.age}}</el-descriptions-item>
        <el-descriptions-item label="类型"><el-tag size="small">学生</el-tag></el-descriptions-item>
        <el-descriptions-item label="专业">{{tableData.major}}</el-descriptions-item>
        <el-descriptions-item label="辅导员">{{tableData.assistant}}</el-descriptions-item>
        <el-descriptions-item label="班级">{{tableData.class}}</el-descriptions-item>
        <el-descriptions-item label="性别">{{tableData.gender}}</el-descriptions-item>
        <el-descriptions-item label="简介"><el-input
  type="textarea"
  :rows="10"
  placeholder="请输入内容"
  style="font-size:16px"
  v-model="textarea">
</el-input></el-descriptions-item>
      </el-descriptions>
      
    </el-card>
  </div>
</template>

<script>
import { getStuInfo } from "@/api/user";
import store from "@/store";
export default {
  data() {
    return {
      tableData:{},
      textarea:"本人性格开朗，爱好广泛，在学习期间积极参加各种活动，多次组织一些校园活动。积极向上且对待工作认证负责，有上进心，勤于学习能不断进步，喜欢向高难度挑战，提升自身的能力与综合素质。我是一个很有时间观念的人，能积极认真做好每件事，不怕辛苦不怕累，更不怕挫折，待人真诚，善于沟通、协调，有较强的组织能力与团队精神。"
    };
  },
  methods: {
    async initData() {
      let result = await getStuInfo({stu: store.getters.stuName});
      if(result.code==200){
        this.tableData = result.data
      }
    },
  },
  mounted() {
    this.initData();
  },
};
</script>

<style scoped>
.info-box {
  display: flex;
  justify-content: center;
  background-color: #dbe2ef;
  height: calc(100vh - 80px);
}
.card-box {
  width: 1200px;
  height: calc(100vh - 100px);
  border-radius: 18px;
  margin-top: 10px;
}
.title-style{
  margin-right: 1000px;
  font-size: 22px;
  margin-bottom: 20px;
}
</style>
