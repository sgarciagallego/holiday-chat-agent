import React from "react"
import './css/typography.css'
import './index.css'
import BotProcess from './components/bot/BotProcess'

const App = ()  => {
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
  
  return (
    <div className="App">
      <BotProcess />
    </div>
  )
}

export default App