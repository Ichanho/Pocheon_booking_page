import { useState } from "react";
import { Link } from "react-router-dom"
import styles from "./Calendar.module.css"

function Calendar() {

  interface days {
    year: number,
    month: number,
    date: number,
    hour: number,
    minute: number,
    sec: number,
    day: number
  }

  function getTime(): days {
    const day = new Date;
    const time: days = {
      year: day.getFullYear(),
      month: day.getMonth() + 1,
      date: day.getDate(),
      hour: day.getHours(),
      minute: day.getMinutes(),
      sec: day.getSeconds(),
      day: day.getDay()
    };

    return time;
  }

  const [tagetday, setTagetday] = useState(getTime());

  function renderCalendar(): number[] {
    const preMonthLastDay = new Date(tagetday.year, tagetday.month - 1, 0);
    const thisMonthLastDay = new Date(tagetday.year, tagetday.month, 0);

    const preMonthLastDate: number = preMonthLastDay.getDate();
    const thisMonthLastDate: number = thisMonthLastDay.getDate();

    const preMonthLastDOW = preMonthLastDay.getDay();
    const thisMonthLastDOW = thisMonthLastDay.getDay();

    const preMonth: number[] = [];
    for (let i = 0; i < preMonthLastDOW + 1; i++) {
      preMonth.unshift(preMonthLastDate - i);
    }
    const thisMonth: number[] = [...Array(thisMonthLastDate)];
    for (let i = 0; i < thisMonthLastDate; i++) {
      thisMonth[i] = i + 1;
    }
    const nextMonth: number[] = [];
    for (let i = 1; i < 7 - thisMonthLastDOW; i++) {
      nextMonth.push(i);
    }
    const showDates: number[] = preMonth.concat(thisMonth, nextMonth);

    return showDates;
  }

  const showDayOfTheWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  let showDates = renderCalendar();

  function handlePreMonth() {
    if (tagetday.month === 1) {
      setTagetday((tagetday) => {
        return { ...tagetday, year: tagetday.year - 1, month: 12 }
      })
    }
    else {
      setTagetday((tagetday) => {
        return { ...tagetday, month: tagetday.month - 1 }
      })
    }
    showDates = renderCalendar();
    console.log(tagetday.month);
  }

  function handleNextMonth() {
    if (tagetday.month === 12) {
      setTagetday((tagetday) => {
        return { ...tagetday, year: tagetday.year + 1, month: 1 }
      })
    }
    else {
      setTagetday((tagetday) => {
        return { ...tagetday, month: tagetday.month + 1 }
      })
    }
  }

  function handleToday() {
    setTagetday(getTime())
  }

  return <div className={styles.calendar}>
    <div className={styles.header}>
      <div className={styles.year_month}>{tagetday.year}년 {tagetday.month}월</div>
      <div className={styles.control}>
        <button className={styles.btn} onClick={handlePreMonth}>⟨</button>
        <button className={`${styles.go_today} ${styles.btn}`} onClick={handleToday}>Today</button>
        <button className={styles.btn} onClick={handleNextMonth}>〉</button>
      </div>
    </div>

    <div className={styles.show_days}>
      <div className={styles.day_of_the_week}>
        {showDayOfTheWeek.map((each, index) => {
          return <div key={index} className={styles.day}>{each}</div>
        })}
      </div>
      <div className={styles.dates}>
        {showDates.map((each, index) => {
          let classNameTemp: string = `${styles.date}`;
          const id: string = `${tagetday.year}${String(tagetday.month).padStart(2, "0")}${String(each).padStart(2, "0")}`;
          if (each > index || (index - each) > 7) {
            classNameTemp = `${styles.date} ${styles.other}`
          }
          return <div className={classNameTemp} key={id}>
            <Link to={`/book/${id}`} style={{ color: "inherit", textDecoration: "inherit" }}>{each}</Link></div>;
        })}
      </div>
    </div>
  </div>;
}

export default Calendar;