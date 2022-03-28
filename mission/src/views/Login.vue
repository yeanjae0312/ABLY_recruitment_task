<template>
  <div class="login">
    <p class="title">로그인</p>
    <div class="login-form">
      <label class="label">
        <span>Email : </span>
        <input type="text" data-test="login-text-email" required>
      </label>
      <label class="label">
        <span>Password : </span>
        <input type="password" data-test="login-text-pw" required>
      </label>
      <div class="login-btn">
        <button type="submit" class="login-btn" data-test="login-btn">로그인</button>
        <button class="login-btn" data-test="pw-btn">비밀번호 재설정</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  padding: 0 var(--paddingSide);
  box-sizing: border-box;
}

.login-form {
  margin-top: 50px;
}

.login-form .label {
  --textWidth: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.login-form .label:last-child {
  margin-bottom: 0;
}

.login-form .label span {
  width: var(--textWidth);
  font-weight: bold;
}

.login-form .label input {
  width: calc(100% - var(--textWidth));
  border: solid 1px #ccc;
  padding: 8px 12px;
  border-radius: 10px;
}

.login-form .label input:focus {
  outline-color: #fe3152;
}

.login-form .login-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.login-form .login-btn button {
  border: none;
  background-color: #fe3152;
  padding: 8px 12px;
  border-radius: 14px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>
