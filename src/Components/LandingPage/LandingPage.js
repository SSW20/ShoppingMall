import React from "react";
import EventSlider from "./sections/EventSlider/EventSlider";
import NewItems from "./sections/NewItems/NewItems";
import PopularItems from "./sections/PopularItems/PopularItems";
import PopularSearch from "./sections/PopularSearch/PopularSearch1";
function LandingPage() {
  return (
    <div>
      {/* 홈 화면의 이벤트가 계시되는 곳 */}
      <EventSlider />
      <div style={{ width: "80%", margin: "3rem auto" }}>
        {/*홈화면의 신상품이 계시되는 곳 */}
        <NewItems />
        <br />
        <br />
        <hr />
        {/* 인기상품 */}
        <PopularItems />
        <br />
        <br />
        <hr />
        {/* 인기 검색어 1 2 3 4 5 */}
        <PopularSearch />
      </div>
    </div>
  );
}

export default LandingPage;
