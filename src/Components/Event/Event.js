import React, { useState } from "react";
import { Row, Col } from "antd";
import image from "../../images/1.jpg";
import { Link } from "react-router-dom";
import "./Event.css";
function Event() {
  const [Zoom, setZoom] = useState(false);
  const mouseLeaveHandler = () => {
    setZoom(false);
  };
  const mouseOverHandler = () => {
    setZoom(true);
  };
  //서버에서 이벤트 정보 받아오기
  //임시로 만든 이벤트 사진
  const events = [image, image, image, image, image];
  const renderEvents = events.map((item, index) => {
    return (
      <Col key={index} lg={8} xs={24}>
        {/* 이벤트 하나의 ID를 더해  링크를 만든다  */}
        <Link to="#">
          <div style={{ border: "3px solid" }}>
            <img src={item} alt={"이벤트"} style={{ width: "100%" }}></img>
          </div>
        </Link>
        <h3>이벤트 제목 {index + 1}</h3>
      </Col>
    );
  });
  return (
    <div style={{ margin: "20px", border: "10px solid", borderRadius: "30px" }}>
      <div style={{ width: "90%", margin: "3rem auto" }}>
        <h1
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "40px",
            fontStyle: "italic",
          }}
        >
          이벤트
        </h1>
        <Row gutter={[16, 16]}>{renderEvents}</Row>
      </div>
    </div>
  );
}

export default Event;
