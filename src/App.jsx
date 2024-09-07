import { useState } from "react"
import Header from "./components/Header/Header"


export const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={`${darkMode && 'dark' } font-quicksand`}>
      <Header  toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
  </div>
  )
}

export default App