<template>
  <div class="changePassword">
    <p class="title">비밀번호 변경</p>
    <div class="common-form change-pw-form">
      <label class="label">
        <span>새 비밀번호 : </span>
        <input type="password" ref="inputPw" v-model="inputPw" required>
      </label>
      <label class="label">
        <span>비밀번호 확인 : </span>
        <input type="password" v-model="inputConfirmPw" required>
      </label>
      <div class="common-btn-wrap">
        <button class="common-btn" @click="changePw" data-test="login-btn">변경하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'changePassword',
  components: {
  },
  data() {
    return {
      inputPw: '',
      inputConfirmPw: '',
    };
  },
  mounted() {
    this.$refs.inputPw.focus();
  },
  methods: {
    changePw() {

    },
  },
};
</script>

<style scoped>
.changePassword {
  width: 100%;
  padding: 0 var(--paddingSide);
  box-sizing: border-box;
}

.change-pw-form {
  margin-top: 50px;
}

.change-pw-form .label {
  --textWidth: 130px;
}
</style>
