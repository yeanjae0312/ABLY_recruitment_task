import LoginRepository from './LoginRepository';
import LogoutRepository from './LogoutRepository';
import UserInfoRepository from './UserInfoRepository';
import ChangePwRepository from './ChangePwRepository';

const repositories = {
  login: LoginRepository,
  logout: LogoutRepository,
  userInfo: UserInfoRepository,
  changePw: ChangePwRepository,
};
export default {
  get: (name) => repositories[name],
};
