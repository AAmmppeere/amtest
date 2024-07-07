import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authentication";

function HomePage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <>
      <div>this is home page</div>
      <button
        onClick={() => navigate("/register")}
        className="text-blue-600 hover:underline"
      >
        ลงทะเบียน
      </button>
      <br />
      <button
        onClick={() => navigate("/login")}
        className="text-blue-600 hover:underline"
      >
        กลับไปหน้าเข้าสู่ระบบ
      </button>
      <br />
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </>
  );
}

export default HomePage;
