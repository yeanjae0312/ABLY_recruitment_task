<template>
  <div class="authConfirm">
    <p class="title">인증 코드 검증</p>
    <div class="common-form auth-confirm-form">
      <label class="label">
        <span>인증코드 : </span>
        <input type="text" ref="inputCode"
          v-model="inputCode" required>
      </label>
      <label class="label">
        <span>남은시간 : </span>
        <p class="area-count">{{ minuates}} : {{ seconds }}</p>
      </label>
      <div class="common-btn-wrap">
        <button class="common-btn" @click="enterNext">다음</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'AuthConfirm',
  components: {
  },
  data() {
    return {
      inputCode: '',
      timer: null,
      totalTime: '',
      minuates: '',
      seconds: '',
    };
  },
  mounted() {
    this.$refs.inputCode.focus();
  },
  created() {
    this.startTimer();
  },
  computed: {
    ...mapState('AuthStorage', ['countTime', 'issueToken', 'authEmail']),
  },
  methods: {
    ...mapMutations('AuthStorage', ['storedConfirmToken']),
    startTimer() {
      this.totalTime = this.countTime / 1000 - 1;

      this.countDown();

      this.timer = setInterval(() => {
        this.countDown();
      }, 1000);
    },
    countDown() {
      this.minuates = String(Math.floor(this.totalTime / 60)).padStart(2, '0');
      this.seconds = String(this.totalTime % 60).padStart(2, '0');

      if (this.totalTime >= 1) {
        this.totalTime -= 1;
      } else {
        this.totalTime = 0;
        clearInterval(this.timer);
      }
    },
    enterNext() {
      const saveData = {};
      saveData.email = this.authEmail;
      saveData.authCode = this.inputCode;
      saveData.issueToken = this.issueToken;

      try {
        this.axios.post('/api/reset-password', saveData, { headers: { 'Content-Type': 'application/json' } })
          .then((res) => {
            if (res.status === 200) {
              this.storedConfirmToken(res.data);
            }
          }).catch((error) => {
            console.log(error);
            // eslint-disable-next-line no-alert
            alert('잘못된 접근이거나 값이 올바르지 않아요.');
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.auth-confirm-form {
  margin-top: 50px;
}

.auth-confirm-form .area-count {
  width: calc(100% - var(--textWidth));
}
</style>
