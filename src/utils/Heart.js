import React from "react";
import * as BiIcons from "react-icons/bi";
//찜하기 기능
function Heart(props) {
  return (
    <div>
      <BiIcons.BiHeart style={{ fontSize: "30px", color: "red" }} />
    </div>
  );
}

export default Heart;
