import React, { useState } from "react";
const Time = () => {
  const foo = (st) => {
    if (st < 10) {
      st = `0${st}`;
    } else if (st > 99) {
      st = Math.round(st/10);
    }
    return st
  };
  const curTime = () => {
    let today = new Date();
    let hours = today.getHours(),
      minutes = today.getMinutes(),
      seconds = today.getSeconds(),
      milseconds = today.getMilliseconds();
    return `${foo(hours)}:${foo(minutes)}:${foo(seconds)}:${foo(milseconds)}`;
  };

  const [time, setTime] = useState(curTime());
  setInterval(() => {
    setTime(curTime());
  }, 100);
  return <center>{time}</center>;
};

export default Time;
