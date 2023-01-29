<template>
  <div class="info-box">
    <el-card class="card-box infinite-list-wrapper" style="overflow: auto">
      <div class="card-box-header">
        <span class="title-style">修改信息:</span>
        <div>
          <el-button
            @click="$router.go(-1)"
            type="primary"
            style="border-radius: 10px"
            icon="el-icon-back"
            >返回</el-button
          ><el-button
            type="primary"
            style="border-radius: 10px"
            icon="el-icon-edit"
            @click="okHandler"
            >确定</el-button
          >
        </div>
      </div>
      <el-form class="form-style" label-width="80px" :model="tableData">
        <el-row >
        <el-col :span="10" :offset="1"><el-form-item label="姓名:" :label-width="formLabelWidth">
          <el-input v-model="tableData.name" disabled></el-input>
        </el-form-item></el-col>
        <el-col :span="10" :offset="2"><el-form-item label="电话:" :label-width="formLabelWidth">
          <el-input v-model="tableData.phone" ></el-input>
        </el-form-item></el-col>
        <el-col :span="10" :offset="1"><el-form-item label="年龄:" :label-width="formLabelWidth">
          <el-input v-model="tableData.age" disabled></el-input>
        </el-form-item></el-col>
        <el-col :span="10" :offset="2"><el-form-item label="专业:" :label-width="formLabelWidth">
          <el-input v-model="tableData.major" disabled></el-input>
        </el-form-item></el-col>
         <el-col :span="10" :offset="1"><el-form-item label="辅导员:" :label-width="formLabelWidth">
          <el-input v-model="tableData.assistant" disabled></el-input>
        </el-form-item></el-col>
         <el-col :span="10" :offset="2"><el-form-item label="班级:" :label-width="formLabelWidth">
          <el-input v-model="tableData.class" disabled></el-input>
        </el-form-item></el-col>
        <el-col :span="10" :offset="1"><el-form-item label="性别:" :label-width="formLabelWidth">
          <el-input v-model="tableData.gender" ></el-input>
        </el-form-item></el-col>
         <el-col :span="10" :offset="2"><el-form-item label="家庭住址:" :label-width="formLabelWidth">
          <el-input v-model="tableData.address" ></el-input>
        </el-form-item></el-col>
         <el-col :span="10" :offset="1"><el-form-item label="爱好:" :label-width="formLabelWidth">
          <el-input v-model="tableData.hobby" ></el-input>
        </el-form-item></el-col>
         <el-col :span="20" :offset="1"><el-form-item label="简介:" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="10" style="font-size:16px" v-model="tableData.selfintroduction"> </el-input>
        </el-form-item></el-col>
      </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getStuInfo,updatePersonInfo } from "@/api/user";
import store from "@/store";
export default {
  data() {
    return {
      tableData: {},
      input: "读书，写代码",
      textarea: "",
      formLabelWidth: "80px",
    };
  },
  methods: {
    async initData() {
      let result = await getStuInfo({ stu: store.getters.stuName });
      if (result.code == 200) {
        this.tableData = result.data;
        this.textarea = result.data.selfintroduction;
      }
    },
    async okHandler(){
        let result = await updatePersonInfo(this.tableData)
        if(result.code==200){
             this.$message({
          message: result.msg,
          type: 'success'
        });
        this.$router.go(-1)
        }
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
.title-style {
  margin-left: 20px;
}
.card-box-header {
  display: flex;
  justify-content: space-between;
}
.form-style{
    margin-top: 20px;
}
</style>