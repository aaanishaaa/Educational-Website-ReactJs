import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
// import "index2.html"
const Header = () => {
  const [click, setClick] = useState(false)
  const NavigateExternal = ({ to }) => {
    useEffect(() => {
      window.location.href = to;
    }, []);
    return null;
  };
  const [timerDuration, setTimerDuration] = useState(1800); // Initial timer duration set to 5 seconds (for testing)

    useEffect(() => {
      const timerInterval = setInterval(() => {
        setTimerDuration(prevDuration => {
          if (prevDuration <= 0) {
            clearInterval(timerInterval);
            window.close(); // Close the window when the timer ends
            return 0;
          }
          return prevDuration - 1;
        });
      }, 1000); // Update every second
  
      return () => clearInterval(timerInterval);
    }, []);
  
    const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  return (
    
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Learning</Link>
            </li>
            <li>
              <Link to='index2.html'>Quiz</Link>
            </li>
            <li > <Link to='/playground'>PlayGround</Link>
            </li>
            <li>
              <Link to='/pricing'>MarketPlace</Link>
            </li>
            <li>
              <Link to='/journal'>Blogs</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>     <span className="timer">{formatTime(timerDuration)}</span></li>
          </ul>
          <div className='start'>
            <div className='button'>Instructor Support</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
