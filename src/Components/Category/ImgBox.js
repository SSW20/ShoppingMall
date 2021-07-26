import React from "react";
import './Category.css';
import {Link} from "react-router-dom";

export default function ImgBox(props){ // cateObj


    return props.cate.map(({name, src}) => { // 각 카테고리 대표 이미지와 그 이름으로 구성된 배열
        const link = "./categories/".concat(name); // 연결 하이퍼 링크
        console.log(link);
        return(
            <div className="img_box">
                <Link to={link}><img src={src} className="thumbnail" alt={name}/><span className="thbName">{name}</span></Link>
            </div>
        )
    });
}