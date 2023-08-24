import React from 'react';
import { useState } from 'react';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // have buttons on the top of the page that have the pre determined times for the timer 
  // an hour, 45min, and 15min
  //take whichever time on the button clicked and create timer counting down from that time

  return (
    <div className='timer'>
      
    </div>
  );
};

export default Timer;