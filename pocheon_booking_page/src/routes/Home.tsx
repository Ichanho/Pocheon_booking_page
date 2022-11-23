import React from "react";
import Calendar from "../component/Calendar";
import Title from "../component/title";
import styles from "./Home.module.css"

function Home(){


  return <div>
    <Title />
    <div className={styles.body}><Calendar /></div>
  </div>;
}

export default Home;