<template>
  <div class="info-box">
    <el-card class="card-box">
      <div class="card-box-header">
        <span class="title-style">留言板</span>
        <div>
          <el-button type="primary" 
          style="border-radius: 10px" 
          icon="el-icon-edit" 
          @click="okHandler">发布留言</el-button>
        </div>
      </div>
      <el-card class="message-card infinite-list-wrapper" style="overflow: auto">
        <div style="padding-top:10px">
          <div class="message-content">
              这是一条留言测试,测试留言展示。
          </div>
          <div class="release-status">
              <div class="publisher">庄思超</div>
              <div style="margin-left:5px">发布于</div>
              <div class="release-time">2023-01-29</div>
          </div>
        </div>
      </el-card>
    </el-card>
    <Pagination @getPageInfo="getPageInfo" :total="total"> </Pagination>
  </div>
</template>

<script>
export default {
  data(){
    return{
       total:0,
    }
  },
  methods:{
    async getPageInfo(pageIndex, pageSize) {
      this.pageIndex = pageIndex;
      this.pageSize = pageSize;
    },
  }
};
</script>

<style>
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
.card-box-header {
  display: flex;
  justify-content: space-between;
}
.title-style {
  margin-left: 20px;
}
.message-card{
  width: 75%;
  height: 130px;
  margin-top: 10px;
}
.message-content{
  display: flex;
  font-size: 18px;
  font-weight: 600;
}
.release-status{
  display: flex;
  margin: 10px 10px;
}
.publisher{
  font-weight: 600;
}
.release-time{
  margin-left: 5px;
  font-weight: 600;
}
</style>