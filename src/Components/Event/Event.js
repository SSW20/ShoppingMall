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
          <div>
            <img src={item} alt={"이벤트"} style={{ width: "90%" }}></img>
          </div>
        </Link>
        <h3>이벤트 제목 {index + 1}</h3>
      </Col>
    );
  });
  return (
    <div style={{ width: "80%", margin: "3rem auto", textAlign: "center" }}>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        EVENT
      </h1>
      <Row gutter={[16, 16]}>{renderEvents}</Row>
    </div>
  );
}

export default Event;
