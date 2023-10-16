import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>로그인이 필요없는 메인 페이지 입니다.</h3>
      <p>로그인을 하려면 아래 버튼을 눌러주세요</p>
      <button onClick={() => navigate("/login")}>로그인</button>
    </div>
  );
};

export default Home;
