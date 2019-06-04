<template>
  <div class="login-box">
    <el-form :model="loginForm"  ref="loginForm" label-position="center" label-width="60px" :rules="rules">
      <h3>系统登陆</h3>
      <el-form-item label="账号:" prop="username">
        <el-col :span="23">
          <el-input v-model="loginForm.username" placeholder="请输入账户名" ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码:" prop="pwd">
        <el-col :span="23">
          <el-input v-model="loginForm.pwd" placeholder="请输入密码" ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item size="large">
        <el-col :span="20">
          <el-button type="success" plain @click.native.prevent="onSubmit('loginForm')" :loading="logining">登陆</el-button>
        </el-col>
      </el-form-item>
    </el-form>
    <count></count>
  </div>
</template>
<script>
import { requestLogin } from '@/api/api';
import { appLogin } from '@/api/api';
import  count  from '../components/count.vue';
export default {
  data(){
    return{
      logining: false,
      loginForm:{
        username:'',
        pwd:'',
        name:''
      },
      rules:{
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        pwd: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],
      }
    };
  },
  components: { count },
  methods:{
    onSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.logining = true;
            var loginParams = { registered_phone: this.loginForm.username, password: this.loginForm.pwd };
             appLogin(loginParams).then(data => {
              this.logining = false;
              console.log("data:" + JSON.stringify(data))
              let { code, message, results } = data
              this.$router.push({ path: '/' });
            })
            this.logining = false;
          } 
        });
    }
  },
}
</script>
<style>
.login-box{
  margin: 15% auto;
  width: 400px;
  height: 220px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>
