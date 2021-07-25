import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div>
      <form>
        <div className="login-container">
          <h1 className="login-text">로그인</h1>
          <div style={{ textAlign: "center" }}>
            <label>아이디 : </label>
            <input type="text" />
            <br />
            <br />
            <label>비밀번호 : </label>
            <input type="text" />
            <br />
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button>로그인</button>
            <button>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                회원가입
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
