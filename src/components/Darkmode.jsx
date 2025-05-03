import React, { useEffect, useState } from 'react'
import { BsSun, BsMoon } from "react-icons/bs";
function darkmode() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
      );
    
      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);
  return (
    <div>
       <button
        onClick={() => setDarkMode(!darkMode)}
        className="gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark: rounded-full translate-x-9/1">
        {darkMode ? <BsSun size={20} /> : <BsMoon size={20} /> }
      </button>
    </div>
  )
}

export default darkmode
