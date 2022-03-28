<template>
  <div class="login">
    <p class="title">로그인</p>
    <div class="login-form">
      <label class="label">
        <span>Email : </span>
        <input type="text" ref="inputEmail" data-test="login-text-email"
          v-model="inputEmail" required>
      </label>
      <label class="label">
        <span>Password : </span>
        <input type="password" ref="inputPw" data-test="login-text-pw" v-model="inputPw" required>
      </label>
      <div class="login-btn">
        <button @click="doLogin" class="login-btn" data-test="login-btn">로그인</button>
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
  data() {
    return {
      inputEmail: '',
      inputPw: '',
    };
  },
  mounted() {
    this.$refs.inputEmail.focus();
  },
  methods: {
    doLogin() {
      if (this.inputEmail === '') {
        // eslint-disable-next-line no-alert
        alert('이메일을 입력하세요.');
        this.$refs.inputEmail.focus();
      } else if (this.inputPw === '') {
        // eslint-disable-next-line no-alert
        alert('비밀번호를 입력하세요.');
        this.$refs.inputPw.focus();
      }

      const HOST = 'https://ably-frontend-assignment-server.vercel.app';
      const saveData = {};
      saveData.email = this.inputEmail;
      saveData.password = this.inputPw;

      try {
        this.axios.post(`${HOST}/api/login`, JSON.stringify(saveData), { headers: { 'Content-Type': 'application/json' } })
          .then((res) => {
            if (res.status === 200) {
              // this.$store.commit('login', res.data);
              this.$router.push({ name: 'Login' });
              // eslint-disable-next-line no-alert
              alert('회원정보가 맞습니다.');
            }
          }).catch((error) => {
            if (error.response.status === 404) {
            // eslint-disable-next-line no-alert
              alert('회원정보가 틀립니다. 다시 입력해 주세요.');
              this.$refs.inputEmail.value = '';
              this.$refs.inputPw.value = '';
            }
          });
      } catch (error) {
        console.error(error);
      }
    },
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
