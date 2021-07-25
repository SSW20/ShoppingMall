import React from "react";
import "./Register.css";
function Register() {
  return (
    <div>
      <form>
        <div className={"register-container"}>
          <h1 style={{ textAlign: "center" }}>회원 가입</h1>
          <div style={{ width: "50%", margin: "3rem auto", marginTop: "-5px" }}>
            <label>아이디 : </label>
            <input type="text" />
            <button type="button" className="check-button">
              중복 확인
            </button>
            <br />
            <br />
            <label>이름 : </label>
            <input type="text" />
            <br />
            <br />
            <label>비밀번호 : </label>
            <input type="text" />
            <br />
            <br />
            <label>비밀번호 확인 : </label>
            <input type="text" />
            <br />
            <br />
            <label>배송주소 : </label>
            <input type="text" style={{ width: "65%" }} />
            <br />
            <br />
            <label>상세주소 : </label>
            <input type="text" style={{ width: "50%" }} />
            <br />
            <br />
            <label>휴대폰 번호 : </label>
            <input type="text" />
            <br />
            <br />
            <label>생일 : </label>
            <input type="text" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="register-button">회원가입</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
