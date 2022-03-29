<template>
  <div class="authRequest">
    <p class="title">인증 코드 발급 요청</p>
    <div class="common-form auth-request-form">
      <label class="label">
        <span>Email : </span>
        <input type="text" ref="inputEmail" v-model="inputEmail" required>
      </label>
      <div class="common-btn-wrap">
        <button class="common-btn" @click="enterNext">다음</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AuthRequest',
  components: {
  },
  data() {
    return {
      inputEmail: '',
    };
  },
  mounted() {
    this.$refs.inputEmail.focus();
  },
  methods: {
    ...mapMutations('AuthStorage', ['storedAuthData', 'storedEmail']),
    async enterNext() {
      try {
        const res = await this.axios.get(`/api/reset-password?email=${this.inputEmail}`, { headers: { 'Content-Type': 'application/json' } });

        if (res.status === 200) {
          this.storedAuthData(res.data);
          this.storedEmail(this.inputEmail);
          this.$router.push({ name: 'AuthConfirm' });
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
          // eslint-disable-next-line no-alert
          alert('인증 요청에 실패했습니다. 메일을 입력해 주세요.');
        } else if (error.response.status === 404) {
          // eslint-disable-next-line no-alert
          alert('인증 요청에 실패했습니다. 정확한 메일을 입력해 주세요.');
        }
      }
    },
  },
};
</script>

<style scoped>
.auth-request-form {
  margin-top: 50px;
}
</style>
