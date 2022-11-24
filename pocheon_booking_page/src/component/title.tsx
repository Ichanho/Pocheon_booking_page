import React from "react";
import {Link} from "react-router-dom"

function Title() {
  return <div>
    <div>
      <h1><Link to={"/"} style={{color: "inherit", textDecoration: "inherit"}}>포천 집 예약하기</Link></h1>
    </div>
    <button>예약</button>
  </div>;
}

export default Title;