import React from "react";
import { useState, useEffect } from "react";


function Countdown({times, selectedTime}) {
  //use useState for the time in the countdown component 
  //use the times array and the selectedTime as the index to find the 
  //selected seconds and have that be the begining of the use state 
  const initialTime = times[selectedTime].seconds 
  const [seconds, setSeconds] = useState(initialTime);
  console.log(selectedTime)

  //use useEffect in order to update the timer after every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, selectedTime]);

  //format the seconds so that it is displayed in hours, mins, and seconds 
  const timeRemaining = (timeInSeconds) => {
    const hr = Math.floor(timeInSeconds / 3600);
    const min = Math.floor((timeInSeconds % 3600) / 60);
    const sec = timeInSeconds % 60

    return `${hr}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
  }

  return (
    <>
      <div>
        <h1>{timeRemaining(seconds)}</h1>
      </div>
    </>
  );
};

export default Countdown;
