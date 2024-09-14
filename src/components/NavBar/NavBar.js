// NavBar.js
import React, { useState, useEffect } from 'react';
import classes from './NavBar.module.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
// import xmasTree from './../../assets/xmastree.png'


const NavBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Update the currentDateTime every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const daysOfWeek = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  const currentDayOfWeek = daysOfWeek[currentDateTime.getDay()];

  const formattedDateTime = currentDateTime.toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div>
      <div className={classes.NavBar}>
        {/* <img src={xmasTree} style={{ height: '4vh', zIndex: '200', marginRight: '-40vw' }}></img> */}
        <Navigation />
        <MobileNavigation />
        <div className={classes.Time}>{currentDayOfWeek}, {formattedDateTime} Uhr</div>
      </div>

    </div>
  );
};

export default NavBar;