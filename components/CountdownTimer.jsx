import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate = '2026-02-14T23:59:59' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsExpired(true);
        return;
      }
        
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-timer">
      <h3 className="countdown-title">⏰ Valentine's Offer Ends In ⏰</h3>
      <div className="timer-display">
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="timer-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="timer-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="time-label">Minutes</div>
        </div>
        <div className="timer-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="time-label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;