import React from 'react';
import { useState } from 'react';
import Countdown from "./Countdown"

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
  const [selectedTime, setSelectedTime] = useState(3);
  const handleTimeChange = (index) => setSelectedTime(index)
  
  return (
    <>
      <div className='selection'>
        {times.map((times, index) => (
          <button 
            className={`time${times.time}`}
            key={times.seconds}
            onClick={() => {
              handleTimeChange(index);
              console.log(index, selectedTime);
            }}
          >
            <h1>{times.time}</h1>
          </button>
        ))}
      </div>

      <div className='timer'>
        <Countdown times={times} selectedTime={selectedTime}/>
      </div>
    </>
  );
};

export default Timer;