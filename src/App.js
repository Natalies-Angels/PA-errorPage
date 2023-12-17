import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';

const CountdownTimer = () => {
  const targetDate = useMemo(() => new Date('December 22, 2023 00:00:00 GMT+00:00'), []);

  const calculateTimeRemaining = useCallback(() => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }, [targetDate]);

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeRemaining]);

  return (
    <div className="countdown-container">
      {/* <img src='./LemaArtboard3IconsBlack.png' alt='PAlogo' /> */}
      <p style={{ fontSize:'smaller', marginBottom: '0px', padding: '10px', fontWeight: 'lighter' }} className='first-p'>
       i have the courage to understand my lot, </p>
       <p style={{ fontSize: 'smaller', marginTop: '5px', padding: '10px', fontWeight: 'lighter' }} className='second-p'>and the will to drive my change
      </p>
      <div className="digital-clock">
        <div className="time-block">
          <p>{timeRemaining.days}</p>
          <p className="time-unit">Days</p>
        </div>
        <div className="colon">:</div>
        <div className="time-block">
          <p>{timeRemaining.hours}</p>
          <p style={{ marginLeft: '30px' }} className="time-unit">Hours</p>
        </div>
        <div className="colon">:</div>
        <div className="time-block">
          <p>{timeRemaining.minutes}</p>
          <p className="time-unit">Minutes</p>
        </div>
        <div className="colon">:</div>
        <div className="time-block">
          <p>{timeRemaining.seconds}</p>
          <p className="time-unit">Seconds</p>
        </div>
      </div>
      {timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0 ? (
        <p className="countdown-over">Countdown is over!</p>
      ) : null}
      
    </div>
  );
};

export default CountdownTimer;
