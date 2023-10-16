import { useState } from "react";
import { User } from "../types/User";
import { useNavigate } from "react-router-dom";

type LoginSuccessMessage = "SUCCESS";
type LoginFailMessage = "FAIL";

interface LoginResponse {
  message: LoginSuccessMessage | LoginFailMessage;
  token: string;
}

const users: User[] = [
  {
    id: "titch1",
    pw: "1234",
    userInfo: {
      nick: "titch1",
    },
  },
  {
    id: "titch2",
    pw: "1234",
    userInfo: {
      nick: "titch2",
    },
  },
];

// 임시 token
const _secret: string = "1q2w3e4r";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const login = async (
    id: string,
    pw: string
  ): Promise<LoginResponse | null> => {
    const user = users.find((user: User) => {
      return user.id === id && user.pw === pw;
    });

    return user
      ? {
          message: "SUCCESS",
          token: JSON.stringify({
            user: user.userInfo.nick,
            secret: _secret,
          }),
        }
      : null;
  };

  const getUserInfo = async (token: string) => {
    const parsedToken = JSON.parse(token);

    if (!parsedToken?.secret || parsedToken.secret !== _secret) return null;

    const loggedUser: User | undefined = users.find((user: User) => {
      if (user.userInfo.nick === parsedToken.user) return user;
    });

    return loggedUser ? loggedUser.userInfo : null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginInfo = await login(id, pw);
    if (!loginInfo) return;

    const userInfo = await getUserInfo(loginInfo.token);
    if (!userInfo) return;

    if (loginInfo) {
      alert(`${userInfo?.nick}님이 로그인 하셨습니다. 환영합니다!`);
      navigate("/PageA");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>로그인 페이지</h2>
        <div>
          <label>ID : </label>
          <input
            type='text'
            value={id}
            placeholder='아이디를 입력하세요'
            onChange={handleInputId}
          ></input>
        </div>
        <div>
          <label>PW : </label>
          <input
            type='password'
            value={pw}
            placeholder='비밀번호를 입력하세요'
            onChange={handleInputPw}
          ></input>
        </div>
        <button>로그인하기</button>
      </form>
    </div>
  );
};

export default Login;
