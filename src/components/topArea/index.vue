<template>
  <div class="top-box">
    <div class="center-box">
      <img @click="goHome" src="@/assets/ptuLogo/logo.png" class="logo-image" />
      <div class="user-box">
        <img src="@/assets/ptuLogo/校训.png" alt="" />
        <el-dropdown>
          <el-avatar :size="50" :src="image1" style="cursor: pointer">
          </el-avatar>
          <span class="el-dropdown-link"> </span>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/" style="text-decoration-line: none">
              <el-dropdown-item> Home </el-dropdown-item>
            </router-link>
            <a
              target="_blank"
              href="https://gitee.com/eatabowl"
              style="text-decoration-line: none"
            >
              <el-dropdown-item>Gitee</el-dropdown-item>
            </a>
            <a
              target="_blank"
              href="https://www.zsc.world"
              style="text-decoration-line: none"
            >
              <el-dropdown-item>Blog</el-dropdown-item>
            </a>
            <el-dropdown-item  @click.native="changePassword">
              <span style="display: block">Change Password</span>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">
              <span style="display: block">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-drawer
  :visible.sync="drawer"
  :direction="direction"
  >
  <div class="drawer-box">
    <div class="drawer-box-header"><span class="change-box-header">修改密码</span> 
     <div style="margin-left:100px">
       <el-button type="primary" @click="okHandler" >提交</el-button>
      <el-button  @click="resetForm('ruleForm')">重置</el-button>
     </div></div>
    <el-form :model="ruleForm" status-icon style="width:30%;margin-top:5px" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
</el-form>
    </div>
</el-drawer>
  </div>
</template>
<script>
import image1 from "@/assets/user/user.jpg"
import {updateUserPW} from "@/api/user"
import store from "@/store"
export default {
  name: "topArea",
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      image1,
      drawer: false,
      direction: 'ttb',
      ruleForm: {
          pass: '',
          checkPass: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      this.$message({
        message: "注销成功",
        type: "warning",
      });
    },
    goHome() {
      this.$router.push({
        path: "/",
      });
    },
    changePassword(){
      this.drawer=true
      this.ruleForm={
          pass: '',
          checkPass: '',
        }
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    okHandler(){
      this.$refs.ruleForm.validate(async(valid) => {
          if (valid) {
            let data = {
              username:store.getters.name,
              password:this.ruleForm.checkPass
            }
            let result = await updateUserPW(data)
            if(result.code==200){
              this.$message({
                message:result.msg,
                type:"success"
              })
              this.drawer=false
            }else{
              this.$message.error(result.msg)
              this.drawer=false
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  },
  mounted() {},
};
</script>

<style  scoped>
.top-box {
  background: url(../../assets/ptuLogo/top-bg.jpg) no-repeat center center;
  background-size: cover;
  margin-top: 3px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.logo-image {
  margin-left: 20px;
  cursor: pointer;
}

.center-box {
  width: 1100px;
  display: flex;
  justify-content: space-between;
  height: 80px;
}

.user-box {
  display: flex;
  align-items: center;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-icon-arrow-down {
  font-size: 12px;
}
.user-box img {
  height: 25px;
  margin-right: 15px;
}
.change-box-header{
  font-size: 20px;
  font-weight: 600;
  margin-left: 50px;
}
.drawer-box{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.drawer-box-header{
  display: flex;
  justify-content: space-between;
  width: 30%;
}
</style>