<template>
  <div class="userInfo">
    <p class="title">회원 정보 조회</p>
    <div class="info-wrap">
      <p class="img">
        <img src="@/assets/sample-img.jpg" alt="" data-test="info-profile">
      </p>
      <p class="name" data-test="info-name"><b>name:</b> 이연재</p>
      <p class="email" data-test="info-email"><b>email:</b> 0000@0000.000</p>
    </div>
    <div class="common-btn-wrap">
      <button class="common-btn" data-test="logout-btn">로그아웃</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  components: {
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
</style>
