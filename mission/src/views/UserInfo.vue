<template>
  <div class="userInfo">
    <p class="title">회원 정보 조회</p>
    <div class="info-wrap">
      <div v-if="!isLoading">
        <p class="img">
          <img :src="userProfile" alt="" data-test="info-profile">
        </p>
        <p class="name" data-test="info-name"><b>name:</b> {{ userName }}</p>
        <p class="email" data-test="info-email"><b>email:</b> {{ userEmail }}</p>
      </div>
      <span v-if="isLoading" class="loading">Loading...</span>
    </div>
    <div class="common-btn-wrap">
      <button class="common-btn" data-test="logout-btn">로그아웃</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'UserInfo',
  components: {
  },
  data() {
    return {
      userProfile: '',
      userName: '',
      userEmail: '',
      isLoading: true,
    };
  },
  mounted() {
    this.loginCheck();
  },
  created() {
    this.getUserInfo();
  },
  computed: {
    ...mapState('LoginStorage', ['accessToken']),
  },
  methods: {
    ...mapMutations('LoginStorage', ['loginCheck']),
    async getUserInfo() {
      const HOST = 'https://ably-frontend-assignment-server.vercel.app';
      const JWT = this.accessToken;

      try {
        const res = await this.axios.get(`${HOST}/api/user`, { headers: { Authorization: `Bearer ${JWT}` } });

        if (res.status === 200) {
          this.userProfile = res.data.profileImage;
          this.userName = res.data.name;
          this.userEmail = res.data.email;
        }

        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.userInfo {
  width: 85%;
  padding: 0 var(--paddingSide);
  box-sizing: border-box;
}

.info-wrap {
  position: relative;
  margin: 50px 0 30px;
  padding: 30px 10px;
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 10px;
}

.info-wrap .img {
  width: 50%;
  margin: 0 auto 18px;
}

.info-wrap .img img {
  width: 100%;
}

.info-wrap p {
  margin-bottom: 18px;
  text-align: center;
}

.info-wrap p:last-child {
  margin-bottom: 0;
}

.info-wrap .loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
