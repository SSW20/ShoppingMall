import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
function EventSlider() {
  // 이벤트 정보들을 서버에서 받아와 state에 저장한다
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel autoplay>
      <Link to="#">
        <div>
          <h3 style={contentStyle}>이벤트 게시1</h3>
        </div>
      </Link>
      <Link to="#">
        <div>
          <h3 style={contentStyle}>이벤트 게시2</h3>
        </div>
      </Link>
      <Link to="#">
        <div>
          <h3 style={contentStyle}>이벤트 게시3</h3>
        </div>
      </Link>
      <Link to="#">
        <div>
          <h3 style={contentStyle}>이벤트 게시4</h3>
        </div>
      </Link>
    </Carousel>
  );
}

export default EventSlider;
