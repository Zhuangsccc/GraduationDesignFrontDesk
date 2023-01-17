<template>
    <div class="top-box">
        <div class="center-box"><img src="@/assets/ptuLogo/logo.png" class="logo-image">
            <div class="user-box">
                <el-dropdown>
                    <el-avatar :size="50" :src="image1"> </el-avatar>
                    <span class="el-dropdown-link">
                    </span>
                    <el-dropdown-menu slot="dropdown" class="user-dropdown">
                        <router-link to="/" style="text-decoration-line: none;">
                            <el-dropdown-item>
                                Home
                            </el-dropdown-item>
                        </router-link>
                        <a target="_blank" href="https://gitee.com/eatabowl" style="text-decoration-line: none;">
                            <el-dropdown-item>Gitee</el-dropdown-item>
                        </a>
                        <a target="_blank" href="https://www.zsc.world" style="text-decoration-line: none;">
                            <el-dropdown-item>Blog</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided>
                            <span style="display:block;">Log Out</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
import image1 from "@/assets/user/user.jpg"
export default {
    name:"topArea",
    data() {
        return {
            image1,
        }
    },
    mounted() {
    }
}
</script>

<style  scoped>
.top-box {
    background: url(../../assets/ptuLogo/top-bg.jpg) no-repeat center center;
    background-size: cover;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.logo-image {
    margin-left: 20px;
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
    color: #409EFF;
}

.el-icon-arrow-down {
    font-size: 12px;
}
</style>