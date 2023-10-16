export interface UserInfo {
  nick: string;
}

export interface User {
  id: string;
  pw: string;
  userInfo: UserInfo;
}
