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
      <button class="common-btn" @click="isLogout" data-test="logout-btn">로그아웃</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import RepositoryFactory from '@/api/repositories/RepositoryFactory';

const LogoutRepository = RepositoryFactory.get('logout');
const UserInfoRepository = RepositoryFactory.get('userInfo');

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
    ...mapMutations('LoginStorage', ['loginCheck', 'logout']),
    getUserInfo() {
      const JWT = this.accessToken;

      const data = UserInfoRepository.get(JWT);

      try {
        data.then((res) => {
          if (res.status === 200) {
            this.userProfile = res.data.profileImage;
            this.userName = res.data.name;
            this.userEmail = res.data.email;
          }
          this.isLoading = false;
        }).catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
      } catch (error) {
        console.log(error);
      }
    },
    isLogout() {
      // eslint-disable-next-line no-alert
      const isLogout = window.confirm('로그아웃 하시겠습니까?');

      if (isLogout) {
        this.doLogout();
      }
    },
    doLogout() {
      const JWT = this.accessToken;

      const data = LogoutRepository.create(JWT);

      try {
        data.then((res) => {
          if (res.status === 200) {
            this.logout();
          }
        }).catch((error) => {
          // eslint-disable-next-line no-alert
          alert('로그아웃에 실패하였습니다.');
          if (error.response.status === 404) {
            console.log(error);
          } else if (error.response.status === 400) {
            console.log(error);
          } else if (error.response.status === 500) {
            console.log(error);
          }
        });

        this.isLoading = false;
      } catch (error) {
        console.log(error);
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
