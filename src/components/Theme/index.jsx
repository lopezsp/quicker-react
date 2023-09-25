import {useTheme} from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from 'react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(theme)
  
  return (
    <div>

      <button className={`${
        darkMode == 'dark' ? "flex" : "hidden"
      }`}
       onClick={() => {
        setTheme('light');
        setDarkMode('light');
      }}><SunIcon className="h-6 w-6"/></button>

      <button className={`${
        darkMode == 'light' ? "flex" : "hidden"
      }`}
      onClick={() => {
        setTheme('dark');
        setDarkMode('dark')
      }}><MoonIcon className="h-6 w-6"/></button>
    </div>
  )
};