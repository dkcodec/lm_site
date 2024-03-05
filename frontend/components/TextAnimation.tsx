// "use client";
// // components/TextAnimation.tsx
// import React, { useEffect, useState } from "react";
// // import { useSpring, animated } from "react-spring";

// interface TextAnimationProps {
//   text: string;
// }

// const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
//   const [animatedText, setAnimatedText] = useState<string>("");
//   const [targetChar, setTargetChar] = useState<string>("");

//   const springProps = useSpring({
//     config: { tension: 180, friction: 20 },
//     from: { translateY: "-50%" },
//     to: { translateY: "0%" },
//     onRest: () => {
//       setAnimatedText((prev) => prev + targetChar);
//       setTargetChar("");
//     },
//   });

//   let currentLetter = 0;

//   useEffect(() => {
//     const randomChars =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";

//     const interval = setInterval(() => {
//       const randomChar =
//         randomChars[Math.floor(Math.random() * randomChars.length)];
//       setTargetChar(randomChar);
//     }, 50);

//     setTargetChar(text[currentLetter]);
//     currentLetter++;
//     // Stop the interval after a certain time
//     setTimeout(() => {
//       clearInterval(interval);
//     }, text.length * 50 + 1000);

//     // Clean up the interval on component unmount
//     return () => clearInterval(interval);
//   }, [text]);

//   return (
//     <div style={{ fontSize: "24px", whiteSpace: "nowrap", overflow: "hidden" }}>
//       {animatedText}
//       <animated.span
//         style={{ display: "inline-block", transform: springProps.translateY }}
//       >
//         {targetChar}
//       </animated.span>
//     </div>
//   );
// };

// export default TextAnimation;
