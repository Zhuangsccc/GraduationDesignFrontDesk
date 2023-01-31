<template>
   <div class="info-box">
    <el-card class="card-box">
      <FilterBar @getKeyWord="getKeyWord" title="财务缴交"></FilterBar>
      <div class="info-card infinite-list-wrapper" style="overflow: auto">
        <el-table
          class="el-table-style"
          :data="
            tableData.filter(
              (data) =>
                !keyword ||
                data.name.toLowerCase().includes(keyword.toLowerCase())
            )
          "
          style="width: 100%"
          :default-sort="{ prop: 'time', order: 'descending' }"
        >
          <el-table-column label="序号" type="index" align="center" width="80">
          </el-table-column>
          <el-table-column label="收费名称" prop="entry_name" align="center">
          </el-table-column>
          <el-table-column
            label="价格"
            prop="price"
            align="center"
            width="200"
            sortable
          >
          </el-table-column>
          <el-table-column
            label="时间"
            prop="creation_time"
            align="center"
            sortable
          >
          </el-table-column>
          <el-table-column label="描述" prop="desc" align="center">
          </el-table-column>
          <el-table-column label="收款码" align="center">
            <template slot-scope="{ row }">
              <img v-show="row.image_url" class="finan-img" :src="row.image_url" alt="" />
              <img v-show="!row.image_url" :src="moren_img" class="finan-img">
                </img>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="{ row }">
              <el-link
                type="danger"
                :underline="false"
                style="margin-left: 10px"
                >删除</el-link
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
import {getFinancialCharges} from "@/api/finance"
export default {
  data(){
    var moren_img = require("@/assets/暂无图片.png")
    return{
      moren_img,
      tableData: [],
      total:0,
      keyword:"",
      pageIndex: 0,
      pageSize: 10,
    }
  },
  methods:{
  getKeyWord(e) {
      this.keyword = e;
    },
    async getPageInfo(pageIndex, pageSize) {
      this.pageIndex = pageIndex;
      this.pageSize = pageSize;
      this.initTableData();
    },
    async initTableData() {
      let result = await getFinancialCharges(this.pageIndex, this.pageSize);
      if (result.code == 200) {
        this.tableData = result.data.tableData;
        if (result.data.total) {
          this.total = result.data.total;
        }
      }
    },
  },
  mounted(){
    this.initTableData()
  }
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
.finan-img{
    height: 120px;
  }
</style>