import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square() {
  const [count, setCount] = useState(0)

  return <button className='square'>X</button>
  
}

export default Square
