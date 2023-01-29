<template>
  <div class="info-box">
    <el-card class="card-box">
      <FilterBar @getKeyWord="getKeyWord" title="成绩查询"></FilterBar>
      <div class="info-card infinite-list-wrapper" style="overflow: auto">
        <el-table
          :data="
            tableData.filter(
              (data) =>
                !keyword ||
                data.name.toLowerCase().includes(keyword.toLowerCase()) ||
                data.subject.toLowerCase().includes(keyword.toLowerCase())
            )
          "
          style="width: 100%"
        >
          <el-table-column type="index" label="序号" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" align="center">
          </el-table-column>
          <el-table-column prop="subject" label="科目" align="center">
          </el-table-column>
          <el-table-column prop="score" label="分数" align="center" sortable>
          </el-table-column>
          <el-table-column prop="type" label="类型" align="center">
          </el-table-column>
          <el-table-column label="状态" align="center">
            <template slot-scope="{ row }">
              <el-tag :type="row.score >= 60 ? `success` : `danger`">{{
                row.score >= 60 ? "通过" : "挂科"
              }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="{ row }">
              <el-link
                type="primary"
                style="margin-right: 10px"
                size="small"
                @click="appeal(row)"
                >申诉</el-link
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <Pagination @getPageInfo="getPageInfo" :total="total"></Pagination>
    </el-card>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import store from "@/store";
import { getScoreByName } from "@/api/score";
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      pageIndex: 0,
      pageSize: 10,
      keyword: "",
    };
  },
  components: { Pagination },
  methods: {
    async getPageInfo(pageIndex, pageSize) {
      this.pageIndex = pageIndex;
      this.pageSize = pageSize;
      this.initTableDataByName(
        store.getters.stuName,
        this.pageIndex,
        this.pageSize
      );
    },
    async initTableDataByName(name, pageIndex, pageSize) {
      let result = await getScoreByName(name, pageIndex, pageSize);
      if (result.code == 200) {
        this.tableData = result.data.tableData;
        this.total = result.data.total;
      }
    },
    getKeyWord(e) {
      this.keyword = e;
    },
    appeal() {
      this.$prompt("请输入申诉理由", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "申诉成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消申诉",
          });
        });
    },
  },
  mounted() {
    this.initTableDataByName(
      store.getters.stuName,
      this.pageIndex,
      this.pageSize
    );
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
.info-card {
  height: 800px;
}

.infinite-list-wrapper {
  height: calc(100vh - 300px);
}
</style>