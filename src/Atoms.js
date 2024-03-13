import { atom } from "recoil";

export const userState = atom({
  key: 'user_role',
  default: '',
});
// '': 로그인 안됨, 'ROLE_USER': 학습자, 'ROLE_MANAGER': 교수자