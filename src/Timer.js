import React from 'react';
import { useState, useEffect } from 'react';

// have buttons on the top of the page that have the pre determined times for the timer 
// an 90min, 60min, 45min, and 15min
//take whichever time on the button clicked and create timer counting down from that time
const times = [
  {
    time: "90 min",
    seconds: 5400,
    saying: ""
  },
  {
    time: "60 min",
    seconds: 3600,
    saying: "YESSSS get shit done!!"
  },
  {
    time: "45 min",
    seconds: 2700,
    saying: "Look at you being productive!!"
  },
  {
    time: "15 min",
    seconds: 900,
    saying: "Take this time to relax!"
  },
  {
    time: "stop",
    seconds: 0,
    saying: ""
  }
]

function Timer() {
  // this is for the selection of the buttons on the top of the page
  const [selectedTime, setSelectedTime] = useState(4);
  const handleTimeChange = (index) => setSelectedTime(index)
  
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
      <div className='selection'>
        {times.map((times, index) => (
          <button 
            className={`time${times.time}`}
            key={times.seconds}
            onClick={() => {
              handleTimeChange(index);
              setSeconds(times.seconds)
            }}
          >
            <h1>{times.time}</h1>
          </button>
        ))}
      </div>

      <div className='timer'>
        <h1>{timeRemaining(seconds)}</h1>
      </div>
    </>
  );
};

export default Timer;