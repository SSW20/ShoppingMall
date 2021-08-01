import React from "react";
import "./BasketInfo.css";
import item from "../../../images/1.jpg";
function BasketInfo() {
  //이 화면으로 이동할 때 useEffect로  DB에서 장바구니의 정보를 가져옴 -> useState로 배열 저장
  const renderBasketInfo = () => {
    //state의 배열을 가져옴 -> Mapping으로 쏴주기
  };
  return (
    <div>
      <table className="BaksetInfo-table">
        <thead>
          <tr className="BasketInfo-edge">
            <td>사진</td>
            <td style={{ width: "30%" }}>이름</td>
            <td>가격</td>
          </tr>
        </thead>
        <tbody>
          {renderBasketInfo}
          {/* 임시 */}
          <tr>
            <td>
              <img
                src={item}
                alt="사진"
                style={{ width: "200px", height: "100px" }}
              />
            </td>
            <td>상품 1</td>
            <td>₩10,000</td>
          </tr>
          <tr className="BasketInfo-edge">
            <td colSpan="2">총 결제금액</td>
            {/* state를 통해 관리 */}
            <td>₩10,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BasketInfo;
