import React from 'react';
import { useState, useEffect } from 'react';

// have buttons on the top of the page that have the pre determined times for the timer 
// an 90min, 60min, 45min, and 15min
//take whichever time on the button clicked and create timer counting down from that time

const Timer = () => {
  //use useState for the time 
  //JUST MAKE THE TIME OF THE BUTTONS IN SECONDS MAYBE... BUT I WANT THE TIME DISPLAYED IN MINS AND HOURS AS WELL?
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  
  
  return (
    <div className='timer'>
      
    </div>
  );
};

export default Timer;