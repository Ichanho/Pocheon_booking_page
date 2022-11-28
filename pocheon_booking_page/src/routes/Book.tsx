import { SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Book.module.css"

function Book() {

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    console.log(event.target);
  }

  const [checkInDate, setcheckInDate] = useState(useParams().date);
  const [checkOutDate, setCheckOutDate] = useState(checkInDate);


  return <div className={styles.book}>
    {/* <p>{checkInDate}</p> */}
    <form action="" onSubmit={handleSubmit} className={styles.bookingForm}>
      <p>Check In (체크인)</p>
      <input className={styles.bookingInput} type="date" id="checkIn" value={checkInDate} onChange={(e) => { setcheckInDate(e.target.value); console.log(e.target.value); }}></input>
      <p>Check Out (체크아웃)</p>
      <input className={styles.bookingInput} type="date" value={checkOutDate} min={checkInDate} onChange={(e) => { setCheckOutDate(e.target.value) }}></input>
      <br />
      <input className={styles.bookingInput} placeholder="사용자 이름" required></input>
      <br />
      <input className={styles.bookingInput} placeholder="비밀번호" required></input>
      <br />
      <button>예약하기</button>
    </form>
  </div>
}

export default Book;