<template>
  <div class="login-box">
    <div class="box-left">
      <img src="@/assets/login.png" alt="" />
    </div>
    <div class="box-right">
      <div class="inside-box" v-if="!isRegister">
        <div
          style="display: flex; justify-content: center; align-items: center"
        >
          <img :src="img1" alt="">
          <header><i class="iconfont" style="color:black">学生系统</i></header>
        </div>
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          style="margin-top: 20px "
        >
          <el-form-item label="">
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="Username"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
              prefix-icon="el-icon-user"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
              @focus="showIcon = 1"
              @blur="showIcon = 0"
              ><i
                v-show="showIcon"
                slot="suffix"
                class="el-icon-view"
                @click="showPwd"
              ></i
            ></el-input>
            <!-- el-icon-view -->
          </el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            style="width: 100%"
            @click.native.prevent="handleLogin"
            >登录</el-button
          >
          <div style="width: 100%; display: flex; justify-content: center;margin-top:10px">
            <el-link @click="toRegister">还没有账号？快去注册一个</el-link>
          </div>
        </el-form>
      </div>
      <div class="register-box" v-if="isRegister">
        <div class="register-box-header">
          <div class="register-box-header-left" @click="backToLogin">
            <el-link><i class="el-icon-back"></i><span>返回登录</span></el-link>
          </div>
          <svg-icon icon-class="在线教育" class="svg" />
          <header><i class="iconfont">注册</i></header>
        </div>
        <el-form
          ref="registerForm"
          :model="registerForm"
          :rules="loginRules"
          style="margin-top: 20px"
        >
          <el-form-item prop="stu">
            <el-input
              ref="username"
              v-model="registerForm.username"
              placeholder="请输入用户名"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
              prefix-icon="el-icon-user"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              :key="passwordType"
              ref="password"
              v-model="registerForm.password"
              :type="passwordType"
              placeholder="请输入密码"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
              @focus="showIcon = 1"
              @blur="showIcon = 0"
            ></el-input>
            <!-- el-icon-view -->
          </el-form-item>
          <el-form-item style="margin-bottom: 5px" prop="checkpassword">
            <el-input
              prefix-icon="el-icon-lock"
              :key="passwordType"
              v-model="registerForm.checkpassword"
              :type="passwordType"
              placeholder="请输入密码"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
              @focus="showIcon = 1"
              @blur="showIcon = 0"
            ></el-input>

            <!-- el-icon-view -->
          </el-form-item>
          <el-form-item style="margin-top:20px" prop="stu">
            <el-input
              ref="username"
              v-model="registerForm.stu"
              placeholder="请输入学生名"
              type="text"
              tabindex="1"
              auto-complete="on"
              prefix-icon="el-icon-user"
            />
          </el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            style="width: 100%"
            @click.native.prevent="handleRegister"
            >注册</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import { regUser } from "@/api/user";
export default {
  name: "StudentPerformance",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    const img1 = require("@/assets/Lo.png")
    return {
      img1,
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        username: "",
        password: "",
        checkpassword:'',
        stu:""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
        checkpassword:[
          {required:true,trigger:'blur',validator:validatePass2}
        ],
        stu:[
          { required: true, trigger: "blur",message:"请输入学生名"},
        ]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      showIcon: 0,
      //是否处于注册状态
      isRegister: false,
      //两次密码是否一致
      isPass: true,
      //第二次输入的密码
      secondPassword: "",
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then((res) => {
               this.loading = false;
              if(res==200){
                this.$router.push({ path: "/" });
                 this.loading = false;
                 this.$message({
                  message:"登陆成功！！",
                  type:"success"
                 })
              }
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleRegister() {
        this.$refs.registerForm.validate(async (valid) => {
          if (valid) {
            this.loading = true;
            delete this.registerForm.checkpassword
            let result = await regUser(this.registerForm);
            if (result.code == 200) {
              this.isRegister = false;
              this.loginForm = {
                username: "",
                password: "",
              };
              this.$message({
                message: "注册成功！",
                type: "success",
              });
            }
            this.registerForm.checkpassword=this.registerForm.password
            if(result.msg=='该学生已绑定'){
              this.registerForm.stu=''
            }
            this.loading = false;
          }
        });
    },
    toRegister() {
      this.isRegister = true;
      this.registerForm = {
        username: "",
        password: "",
        checkpassword:'',
        stu:""
      };
      this.$nextTick(()=>{
        this.$refs.registerForm.clearValidate()
      })
    },
    backToLogin() {
      this.isRegister = false;
      this.$nextTick(()=>{
        this.$refs.loginForm.clearValidate()
      })
    },
  },
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "仓耳渔阳体 W01";
  font-weight: 400;
  src: url("//at.alicdn.com/wf/webfont/OwzqFAbuXJtW/1GlofK69wVDo4DvMnr2F4.woff2")
      format("woff2"),
    url("//at.alicdn.com/wf/webfont/OwzqFAbuXJtW/UcEZK3vp8TsDLhnGTNUe4.woff")
      format("woff");
  font-display: swap;
}

.iconfont {
  font-family: "仓耳渔阳体 W01" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 2rem;
}

.login-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  min-width: 1300px;
}

.box-left {
  background-color: dodgerblue;
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-left img {
  width: 400px;
  height: 300px;
}

.box-right {
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: #06a7fd solid 3px;
}

.inside-box {
  padding-top: 70px;
  width: 400px;
  height: 400px;
}

.svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}

.register-box {
  padding-top: 80px;
  width: 400px;
  height: 400px;
}

.register-tag {
  height: 10px;
}

.register-box-header {
  display: flex;
}

.register-box-header-left {
  margin-top: 20px;
  width: 180px;
}
</style>