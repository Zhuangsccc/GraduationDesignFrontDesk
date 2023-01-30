<template>
  <div class="info-box">
    <el-card class="card-box">
      <div class="card-box-header">
        <span class="title-style">留言板</span>
        <div>
          <el-button
            type="primary"
            style="border-radius: 10px"
            icon="el-icon-edit"
            @click="goPost"
            >发布留言</el-button
          >
        </div>
      </div>
      <div class="info-card infinite-list-wrapper" style="overflow: auto">
        <el-card class="message-card" style="overflow: auto" v-for="item in tableData" :key="item.id" shadow="hover">
          <div style="padding-top: 10px">
            <div class="message-content">{{item.content}}</div>
            <div class="release-status">
              <div class="publisher">{{item.publisher}}</div>
              <div style="margin-left: 5px">发布于</div>
              <div class="release-time">{{item.release_time}}</div>
            </div>
            <div class="reply" v-show="item.reply_time">
              <span style="font-weight: 600">管理员:</span>
              <span class="reply-content">{{item.reply_content}}</span>
              <span style="margin: 0 10px">回复于</span>
              <span class="reply-time" style="font-weight: 600">
                {{item.reply_time}}</span
              >
            </div>
          </div>
        </el-card>
      </div>
    </el-card>
    <Pagination @getPageInfo="getPageInfo" :total="total"> </Pagination>
  </div>
</template>

<script>
import { getMessageBoard } from "@/api/message"
export default {
  data() {
    return {
      total: 0,
      pageIndex: 0,
      pageSize: 10,
      tableData:[]
    };
  },
  methods: {
    async getPageInfo(pageIndex, pageSize) {
      this.pageIndex = pageIndex;
      this.pageSize = pageSize;
    },
    async  initTableData(pageIndex,pageSize){
      let result = await getMessageBoard(pageIndex,pageSize)
      if(result.code==200){
        this.tableData = result.data.tableData;
        this.total = result.data.total;
      }
    },
    goPost(){
      this.$router.push({name:'postMessage'})
    }
  },
  mounted(){
    this.initTableData(this.pageIndex,this.pageSize)
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
.message-card {
  width: 75%;
  min-height: 130px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.message-content {
  display: flex;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
}
.release-status {
  display: flex;
  margin: 10px 10px;
  font-size: 16px;
}
.publisher {
  font-weight: 600;
}
.release-time {
  margin-left: 5px;
  font-weight: 600;
}
.info-card {
  height: 800px;
}
.infinite-list-wrapper {
  height: calc(100vh - 300px);
}
.reply {
  display: flex;
  font-size: 16px;
}
</style>