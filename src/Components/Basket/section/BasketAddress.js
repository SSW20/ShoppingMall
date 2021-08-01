import React from "react";
import "./BasketAddress.css";
function BasketAddress() {
  return (
    <div className="BasketAddress-container">
      <form>
        <div className="BasketAddress-Radio">
          <input type="radio" name="radio" />
          <label>최근 주소지</label>
          <input type="radio" name="radio" />
          <label>계정에 저장된 주소지</label>
          <input type="radio" name="radio" />
          <label>새로운 주소지</label>
        </div>
        <div className="BasketAddress-Address">
          <label>받는 사람: </label>
          <input type="text" />
          <br /> <br />
          <label>주소: </label>
          <input type="text" style={{ width: "40%" }} />
          <label>우편 번호: </label>
          <input type="text" />
          <br /> <br />
          <label>상세 주소: </label>
          <input type="text" style={{ width: "30%" }} />
        </div>
        <div className="BasketAddress-Purchase">
          <label>결제수단: </label>
          <select>
            <option>-선택-</option>
            <option>카카오 페이</option>
            <option>네이버 페이</option>
            <option>페이팔</option>
            <option>토스</option>
          </select>
        </div>
        <div className="BasketAddress-Button">
          <button>결제</button>
        </div>
      </form>
    </div>
  );
}

export default BasketAddress;
