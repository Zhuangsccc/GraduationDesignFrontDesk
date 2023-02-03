<template>
  <div class="info-box">
    <el-card class="card-box">
      <div class="card-box-header">
        <span class="title-style">待办事项</span>
      </div>
      <div v-if="tableData.length >= 1">
        <div class="info-card infinite-list-wrapper" style="overflow: auto">
          <el-card
            class="message-card"
            style="overflow: auto; border-radius: 18px"
            v-for="item in tableData"
            :key="item.id"
          >
            <el-descriptions :title="item.event_name">
              <el-descriptions-item label="范围"
                >{{item.range}}</el-descriptions-item
              >
              <el-descriptions-item label="发起人"
                >{{item.sponsor}}</el-descriptions-item
              >
              <el-descriptions-item label="开始时间">{{item.start_time}}</el-descriptions-item>
              <el-descriptions-item label="结束时间">{{item.end_time}}</el-descriptions-item>
              <el-descriptions-item label="类型">
                <el-tag size="small">{{item.type}}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="描述"
                >{{item.desc}}</el-descriptions-item
              >
            </el-descriptions>
          </el-card>
        </div>
        <Pagination @getPageInfo="getPageInfo" :total="total"> </Pagination>
      </div>
      <div
        v-else
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        "
      >
        <el-empty :image-size="200"></el-empty>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getTodoList } from "@/api/todo";
export default {
  data() {
    return {
      total: 0,
      pageIndex: 0,
      pageSize: 10,
      tableData: [],
    };
  },
  methods: {
    async getPageInfo(pageIndex, pageSize) {
      this.pageIndex = pageIndex;
      this.pageSize = pageSize;
      this.initTableData(this.pageIndex, this.pageSize);
    },
    async initTableData() {
      let result = await getTodoList(this.pageIndex, this.pageSize);
      if (result.code == 200) {
        this.tableData = result.data.tableData;
        this.total = result.data.total;
      }
    },
  },
  mounted() {
    this.initTableData();
  },
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
.info-card {
  height: 800px;
  width: 100%;
}
.infinite-list-wrapper {
  height: calc(100vh - 300px);
}
.message-card {
  width: 95%;
  min-height: 130px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>