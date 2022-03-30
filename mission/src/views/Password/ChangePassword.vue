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
import { mapState } from 'vuex';
import RepositoryFactory from '@/api/repositories/RepositoryFactory';

const ChangePwRepository = RepositoryFactory.get('changePw');

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
  computed: {
    ...mapState('AuthStorage', ['confirmToken', 'authEmail']),
  },
  methods: {
    changePw() {
      const saveData = {};
      saveData.email = this.authEmail;
      saveData.confirmToken = this.confirmToken;
      saveData.newPassword = this.inputPw;
      saveData.newPasswordConfirm = this.inputConfirmPw;

      const data = ChangePwRepository.patch(saveData);

      try {
        data.then((res) => {
          if (res.status === 200) {
            // eslint-disable-next-line no-alert
            alert('비밀번호가 정상적으로 변경되었습니다.');
          }
        }).catch((error) => {
          console.log(error);
          // eslint-disable-next-line no-alert
          alert('비밀번호가 같지 않거나 입력한 내용이 없어요.');
        });
      } catch (error) {
        console.log(error);
      }
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
