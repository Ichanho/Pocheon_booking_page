import React from "react";
import {Link} from "react-router-dom"
import styles from "./title.module.css"

function Title() {
  return <div className={styles.title}>
    <div>
      <h1><Link to={"/"} style={{color: "inherit", textDecoration: "inherit"}}>포천 집 예약하기</Link></h1>
    </div>
    <button>예 약</button>
  </div>;
}

export default Title;