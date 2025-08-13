import { useState } from 'react'
import './App.css'

import Phrases from './views/Phrases';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Phrases />
  )
}

export default App
