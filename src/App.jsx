import { useState } from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {

    const [ darkMode, setDarkMode ] = useState(false)

    const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
      <div className="container">
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          <Main darkMode={darkMode}/>
      </div>
  )
}
