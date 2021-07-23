import React from "react";
import { Row, Col } from "antd";
import image from "../../../../images/1.jpg";
import { Link } from "react-router-dom";

function NewItems() {
  //임시로 만든 상품 이미지
  const images = [image, image, image, image, image];
  //서버에서  상품 정보를 받아오는 코드
  const renderItems =
    //받아온 상품 정보들로 출력할 값 정하는 코드
    images.map((item, index) => {
      return (
        <Col key={index} style={{ width: "20%" }}>
          {" "}
          <Link to="#">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  width: "80%",
                  height: "200px",
                }}
                src={item}
                alt={"상품"}
              />
            </div>
          </Link>
          <div style={{ textAlign: "center" }}>
            <h3>상품 제목</h3>
            <h3>가격: 10,000₩</h3>
          </div>
        </Col>
      );
    });
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>신상품</h2>
        <Link to="#">더보기</Link>
      </div>
      <Row gutter={[16, 16]}>{renderItems}</Row>
    </div>
  );
}

export default NewItems;
