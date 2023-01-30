<template>
  <div class="info-box">
    <el-card class="card-box infinite-list-wrapper" style="overflow: auto">
      <div class="card-box-header">
        <span class="title-style">发布留言</span>
        <div>
          <el-button style="border-radius: 10px" @click="$router.go(-1)"
            >取消</el-button
          >
          <el-button
            type="primary"
            style="border-radius: 10px"
            @click="okHandler"
            >发布</el-button
          >
        </div>
      </div>
      <el-card class="input-content" shadow="hover">
        <textarea
          v-model="form.content"
          class="my-input"
          type="textarea"
        ></textarea>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import store from "@/store";
import { postMessage } from "@/api/message";
import { getMoment } from "@/utils";
export default {
  data() {
    return {
      form: {
        publisher: store.getters.stuName,
        content: "",
        state: 1,
        release_time: "",
      },
    };
  },
  methods: {
    async okHandler() {
      if (this.form.content !== "") {
        const t = new Date();
        this.form.release_time = getMoment(t);
        let result = await postMessage(this.form);
        if (result.code == 200) {
          this.$message({
            message: result.msg,
            type: "success",
          });
          setTimeout(()=>{
            this.$router.go(-1)
          },1000)
        }
      }else{
        this.$message({
          message: '输入内容不能为空',
          type: 'warning'
        });
      }
    },
  },
  mounted() {},
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
.form-style {
  margin-top: 20px;
}
.input-content {
  margin-top: 20px;
  height: calc(100vh - 300px);
}
.my-input {
  width: 100%;
  height: calc(100vh - 300px);
  border: 0px;
  outline: none;
}
.card-box-footer {
  margin-top: 20px;
}
</style>