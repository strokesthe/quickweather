import { useState } from 'react'
import './App.css'

function App() {
  const [cityName, setCityName] = useState("")

  const handleCityNameInput = (e) => {
    setCityName(e.target.value)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Stadtname'
        onChange={handleCityNameInput}
      />
    </div>
  )
}

export default App