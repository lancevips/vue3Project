<template>
  <div class="login-wrapper">
    <div class="form-wrapper">
      <div class="content">
        <div>LOGIN</div>
        <div class="input-box">
          <input type="text" placeholder="请输入用户名" />
        </div>
        <div class="input-box">
          <input type="password" placeholder="请输入密码" />
        </div>
        <button>登录</button><br />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const login = () => {
  console.log(username.value, password.value);
};
</script>

<style lang="less">
.login-wrapper {
  width: 100%;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg")
    no-repeat;
  background-size: cover;

  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 20%;
      min-width: 300px;
      height: 350px;
      border-radius: 10px;
      background: #00000060;

      .input-box {
        margin-top: 8%;
        text-align: center;

        input {
          border: 0;
          width: 60%;
          font-size: 15px;
          color: #fff;
          background: transparent;
          border-bottom: 2px solid #fff;
          padding: 5px 10px;
          outline: none;
          margin-top: 10px;
        }
      }

      button {
        margin-top: 50px;
        width: 60%;
        height: 30px;
        border-radius: 10px;
        border: 0;
        color: #fff;
        text-align: center;
        line-height: 30px;
        font-size: 15px;
        background-image: linear-gradient(to right, #30cfd0, #330867);
      }
    }
  }
}
</style>
