import { useState } from "react";
import { User } from "../types/User";
import { useNavigate } from "react-router-dom";

const users: User[] = [
  { id: "titch1", pw: "1234", nick: "titch1" },
  { id: "titch2", pw: "1234", nick: "titch2" },
];

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      users.find((user: User) => {
        return user.id === id && user.pw === pw;
      })
    ) {
      navigate("/PageA");
    }
  };

  return (
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
  );
};

export default Login;
