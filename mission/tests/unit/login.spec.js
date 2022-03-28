import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';

describe('Login.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Login, {});
  });

  it('email을 입력하는 input이 있는가', () => {
    expect(wrapper.get('[data-test="login-text-email"]').exists()).toBe(true);
  });

  it('password를 입력하는 input이 있는가', () => {
    expect(wrapper.get('[data-test="login-text-pw"]').exists()).toBe(true);
  });

  it('로그인 버튼이 있는가', () => {
    expect(wrapper.get('[data-test="login-btn"]').exists()).toBe(true);
  });

  it('비밀번호 재설정 버튼이 있는가', () => {
    expect(wrapper.get('[data-test="pw-btn"]').exists()).toBe(true);
  });
});
