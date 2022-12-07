import React from "react"
import './css/typography.css'
import './index.css'
import Navbar from "./components/Navbar"
import BotProcess from './components/bot/BotProcess'
import DestinationContainer from './components/DestinationContainer'

const App = ()  => {
  return (
    <div className="App">
      <Navbar />
      <BotProcess />
      <DestinationContainer />
    </div>
  )
}

export default App