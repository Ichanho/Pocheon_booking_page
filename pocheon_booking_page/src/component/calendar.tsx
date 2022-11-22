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
      month: day.getMonth(),
      date: day.getDate(),
      hour: day.getHours(),
      minute: day.getMinutes(),
      sec: day.getSeconds(),
      day: day.getDay()
    };

    return time;
  }

  const today: days = getTime();

  const preMonthLastDay = new Date(today.year, today.month - 1, 0);
  const thisMonthLastDay = new Date(today.year, today.month, 0);

  const preMonthLastDate: number = preMonthLastDay.getDate();
  const thisMonthLastDate: number = thisMonthLastDay.getDate();

  const preMonthLastDOW = preMonthLastDay.getDay();
  const thisMonthLastDOW = thisMonthLastDay.getDay();

  const preMonth: number[] = [];
  for (let i = 0; i < preMonthLastDOW + 1; i++) {
    preMonth.unshift(preMonthLastDate-i);
  }
  const thisMonth: number[] = [...Array(thisMonthLastDate)];
  for (let i = 0; i < thisMonthLastDate; i++) {
    thisMonth[i] = i + 1;
  }
  const nextMonth: number[] = [];
  for (let i = 1; i <7-thisMonthLastDOW; i++){
    nextMonth.push(i);
  }

  const showDates: number[] = preMonth.concat(thisMonth,nextMonth);
  console.log(showDates);



  return <div>
    <div className="header">
      <div className="year_month">{today.year}년 {today.month}월</div>
      <div className="control">
        <button>pre</button>
        <button>today</button>
        <button>next</button>
      </div>
    </div>

    <div className="show_days">
      <div className="day_of_the_week">
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>
      <div className="dates">
        {showDates.map((each)=>{
          return <div>{each}</div>;
        })}
      </div>
    </div>
  </div>;
}

export default Calendar;