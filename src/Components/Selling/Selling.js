import React from "react";
import './Selling.css'

function Selling() {

  return (
    <div>
      <h1 style={{textAlign:"center", fontWeight:"bold", margin:"40px"}}>상품 판매</h1>
      <div className="top">
      <form name="selling" action="#" method="post" enctype="multipart/form-data">
        <div>
          <div className="sell_img">
          <input type="file" accept="image/jpg,impge/png,image/jpeg,image/gif"
                 name="product_img" />
          </div>
          <div className="inputs">
            <label htmlFor="name">이름: </label>
            <input type="text" id="name" required /><br />
            <label htmlFor="category">카테고리: </label>
            <input type="text" id="category" required /><br />
            <label htmlFor="price">판매 가격: </label>
            <input type="text" id="price" pattern="^[0-9]+" required /><br />
            <label htmlFor="brand">브랜드: </label>
            <input type="text" id="brand" /><br />
          </div>
        </div>
        <hr style={{margin:"auto",marginTop:"10px", marginBottom:"10px", width:"90%", alignSelf:"center"}}/>
        <div style={{textAlign: "center"}}>
          <textarea className="detail" placeholder="상품 설명을 적어주세요." rows="10" />
        </div>
        <div style={{textAlign:"right", marginRight: "10%"}}>
          <input className="submit" type="submit" value="게시" />
        </div>

        </form>
      </div>
    </div>
  );
}

export default Selling;
