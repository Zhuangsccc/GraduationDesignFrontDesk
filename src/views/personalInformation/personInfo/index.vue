<template>
  <div class="info-box">
    <el-card class="card-box">
      <div class="card-box-header"><span class="title-style">学生信息:</span><el-button type="primary"  @click="toEdit" icon="el-icon-edit" >修改</el-button></div>
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
        <el-descriptions-item label="家庭住址">{{tableData.address}}</el-descriptions-item>
        <el-descriptions-item label="爱好">{{tableData.hobby}}</el-descriptions-item>
        <el-descriptions-item label="简介"><el-input
           type="textarea"
           :rows="10"
           style="font-size:16px"
           v-model="textarea"
           readonly>
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
      input:"读书，写代码",
      textarea:""
    };
  },
  methods: {
    async initData() {
      let result = await getStuInfo({stu: store.getters.stuName});
      if(result.code==200){
        this.tableData = result.data
        this.textarea = result.data.selfintroduction
      }
    },
    toEdit(){
      this.$router.push({name:"editPersonInfo"})
    }
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
  height: calc(100vh - 142px);
}
.card-box {
  width: 1200px;
  height: calc(100vh - 160px);
  border-radius: 18px;
  margin-top: 10px;
}
.title-style{
  /* margin-right: 1000px;
  font-size: 22px;
  margin-bottom: 20px; */
  margin-left: 20px;
}
.card-box-header{
  display: flex;
  justify-content: space-between;
}
</style>
