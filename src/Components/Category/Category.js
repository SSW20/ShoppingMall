import React from "react";
import cate1 from "../../images/1.jpg"
import cate2 from "../../images/test.jpg"
import ImgBox from "./ImgBox";
import './Category.css'

function Category() {

    const cateName = ["카테고리1", "카테고리2","카테고리3", "카테고리4","카테고리5", "카테고리6","카테고리7", "카테고리8","카테고리9"];
    const cateSrc = [cate1, cate2, cate1, cate2, cate1, cate2, cate1, cate2, cate1];
    const cateObj = cateName.map((mem, idx) => {return {name: mem, src: cateSrc[idx]}});
    // 카테고리 이름, 카테고리 이미지 소스(주소)로 구성된 객체

  return (
    <div className="cate_all">
        <ImgBox cate={cateObj} />
    </div>
  );
}

export default Category;
