// import { useEffect, useState } from "react";

// const DarkMode = () => {
//   const [isDark, setIsDark] = useState(false);

//   // Load saved theme or system preference
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setIsDark(true);
//     } else if (savedTheme === "light") {
//       document.documentElement.classList.remove("dark");
//       setIsDark(false);
//     } else {
//       // System preference
//       const prefersDark = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;

//       if (prefersDark) {
//         document.documentElement.classList.add("dark");
//         setIsDark(true);
//       }
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDark(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDark(true);
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       aria-label="Toggle Dark Mode"
//       className="flex items-center justify-center w-10 h-10 rounded-full
//                  bg-gray-100 dark:bg-gray-800
//                  text-gray-700 dark:text-gray-200
//                  hover:bg-purple-100 dark:hover:bg-purple-900/30
//                  transition-colors duration-300"
//     >
//       {isDark ? "🌙" : "☀️"}
//     </button>
//   );
// };

// export default DarkMode;