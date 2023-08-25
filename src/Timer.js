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
  }
]
//["90min", "60min", "45min", "15min"];


function Timer() {
  //use useState for the time 
  //JUST MAKE THE TIME OF THE BUTTONS IN SECONDS MAYBE... BUT I WANT THE TIME DISPLAYED IN MINS AND HOURS AS WELL?
  const [seconds, setSeconds] = useState(0);

  const [selectedTime, setSelectedTime] = useState(0)
  
  
  return (
    <>
      <div className='selection'>

      </div>
      <div className='timer'>
        <Countdown times={times}/>
      </div>
    </>
  );
};

export default Timer;