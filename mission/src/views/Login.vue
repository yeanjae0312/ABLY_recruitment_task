<template>
  <div class="login">
    <p class="title">로그인</p>
    <div class="common-form login-form">
      <label class="label">
        <span>Email : </span>
        <input type="text" ref="inputEmail" data-test="login-text-email"
          v-model="inputEmail" required>
      </label>
      <label class="label">
        <span>Password : </span>
        <input type="password" ref="inputPw" data-test="login-text-pw" v-model="inputPw" required>
      </label>
      <div class="common-btn-wrap">
        <button class="common-btn" @click="doLogin" data-test="login-btn">로그인</button>
        <router-link :to="{ name: 'AuthRequest' }">
          <button class="common-btn" data-test="pw-btn">비밀번호 재설정</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import RepositoryFactory from '@/api/repositories/RepositoryFactory';

const LoginRepository = RepositoryFactory.get('login');

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
    ...mapMutations('LoginStorage', ['login']),
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

      const saveData = {};
      saveData.email = this.inputEmail;
      saveData.password = this.inputPw;

      const data = LoginRepository.create(saveData);

      try {
        data.then((res) => {
          if (res.status === 200) {
            this.login(res.data);
            // eslint-disable-next-line no-alert
            alert('회원정보가 맞습니다.');
            this.$router.push({ name: 'UserInfo' });
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

.common-form {
  margin-top: 50px;
}
</style>
