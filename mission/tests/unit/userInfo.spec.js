import { shallowMount } from '@vue/test-utils';
import UserInfo from '@/views/UserInfo.vue';

describe('Login.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(UserInfo, {});
  });

  it('회원 프로필 영역이 있는가', () => {
    expect(wrapper.get('[data-test="info-profile"]').exists()).toBe(true);
  });

  it('회원 이름 영역이 있는가', () => {
    expect(wrapper.get('[data-test="info-name"]').exists()).toBe(true);
  });

  it('회원 이메일 영역이 있는가', () => {
    expect(wrapper.get('[data-test="info-email"]').exists()).toBe(true);
  });

  it('로그아웃 버튼이 있는가', () => {
    expect(wrapper.get('[data-test="logout-btn"]').exists()).toBe(true);
  });
});
