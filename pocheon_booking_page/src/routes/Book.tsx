import { useRef, SyntheticEvent, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Book.module.css"

function Book() {
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if (checkInRef.current && checkOutRef.current && nameRef.current && passwordRef.current) {

      const day = checkInRef.current.value;
      const name = nameRef.current.value;
      const pwd = passwordRef.current.value;

      fetch("http://localhost:3001/booking/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          day: day,
          name: name,
          password: pwd
      })
      }).then((res)=>{
        if(res.ok){
          alert("예약이 완료되었습니다.");
          navigate("/");
        }
      })
    }
  }
  
  const [checkInDate, setcheckInDate] = useState(useParams().date);
  const [checkOutDate, setCheckOutDate] = useState(checkInDate);

  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return <div className={styles.book}>
    <form action="" onSubmit={handleSubmit} className={styles.bookingForm}>
      <p>Check In (체크인)</p>
      <input className={styles.bookingInput} type="date" id="checkIn" value={checkInDate} onChange={(e) => { setcheckInDate(e.target.value); }} ref={checkInRef}></input>
      <p>Check Out (체크아웃)</p>
      <input className={styles.bookingInput} type="date" value={checkOutDate} min={checkInDate} onChange={(e) => { setCheckOutDate(e.target.value) }} ref={checkOutRef}></input>
      <br />
      <input className={styles.bookingInput} placeholder="사용자 이름" required ref={nameRef}></input>
      <br />
      <input className={styles.bookingInput} placeholder="비밀번호" required ref={passwordRef}></input>
      <br />
      <button>예약하기</button>
    </form>
  </div>
}

export default Book;