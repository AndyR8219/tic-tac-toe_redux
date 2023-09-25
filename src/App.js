import './App.css'
import { useEffect, useState } from 'react'
import { Game } from './components/game'
// import { winner } from './helper'
import { store } from './store'

function App() {
  const [state, setState] = useState()

  const displayInformation = () => {
    setState(store.getState())
  }

  store.subscribe(displayInformation)

  useEffect(() => {
    store.dispatch({ type: 'NEW_GAME', payload: '' })
  }, [])

  return <Game />
}

export default App
