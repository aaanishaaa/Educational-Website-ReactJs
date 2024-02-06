// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//   const [timerDuration, setTimerDuration] = useState(5); // Initial timer duration set to 5 seconds (for testing)

//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       setTimerDuration(prevDuration => {
//         if (prevDuration <= 0) {
//           clearInterval(timerInterval);
//           window.close(); // Close the window when the timer ends
//           return 0;
//         }
//         return prevDuration - 1;
//       });
//     }, 1000); // Update every second

//     return () => clearInterval(timerInterval);
//   }, []);

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = timeInSeconds % 60;
//     return ${minutes}:${seconds < 10 ? '0' : ''}${seconds};
//   };

//   return (
//     <div style={{ position: 'fixed', top: '10px', left: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '5px 10px', borderRadius: '5px' }}>
//       <span>{formatTime(timerDuration)}</span>
//     </div>
//   );
// };

// export default Timer;