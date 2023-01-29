<template>
   <div class="info-box">
    <el-card class="card-box">
      <FilterBar @getKeyWord="getKeyWord" title="财务缴交"></FilterBar>
      <div class="info-card infinite-list-wrapper" style="overflow: auto">
        <el-table style="width: 100%" >
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
export default {
  data(){
    return{
      tableData: [],
      total:0,
      keyword:"",
      pageIndex: 0,
      pageSize: 10,
    }
  },
  methods:{
  async  getPageInfo(pageIndex, pageSize){
       this.pageIndex = pageIndex;
      this.pageSize = pageSize;
    },
    getKeyWord(e){
    this.keyword = e
  }
  },
}
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
</style>