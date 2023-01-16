// import React, { useEffect, useState } from 'react';

// export default function Screensaver() {
//   const randomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const [color, setColor] = useState('blue');
//   const [dx, setDx] = useState(5);
//   const [dy, setDy] = useState(5);

//   useEffect(() => {
//     const moveBox = setInterval(() => {
//       setX(x + dx);
//       setY(y + dy);
//       if (x + 50 >= window.innerWidth || x <= 0) {
//         setDx(-dx);
//         setColor(randomColor());
//       }
//       if (y + 50 >= window.innerHeight || y <= 0) {
//         setDy(-dy);
//         setColor(randomColor());
//       }
//     }, 50);
//     return () => clearInterval(moveBox);
//   }, [x, y, dx, dy, color]);

//   return (
//     <div>
//       <div
//         style={{
//           position: 'absolute',
//           left: x,
//           top: y,
//           width: 50,
//           height: 50,
//           backgroundColor: color,
//         }}
//       ></div>
//     </div>
//   );
// }
