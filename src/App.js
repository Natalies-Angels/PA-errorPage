import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

const CountdownTimer = () => {
  const targetDate = useMemo(() => new Date('December 22, 2023 00:00:00 GMT+00:00'), []);

  const calculateTimeRemaining = () => {
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
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeRemaining]); // Added an empty dependency array to avoid the exhaustive-deps warning

  return (
    <div className="countdown-container">
      <img src='./LemaArtboard3IconsBlack.png' alt='PAlogo' />
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
      <p style={{ fontSize: 'smaller', marginTop: '100px', padding: '50px', fontWeight: 'lighter' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit tortor eget velit porttitor maximus.
      </p>
    </div>
  );
};

export default CountdownTimer;
