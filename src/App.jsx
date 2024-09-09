import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/button'
import { Temp } from './components/temp';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('grey');

  function handleCount(params) {
    if (params === '+') {
      setCount(prev => prev + 1)
    } else if (params === '-') {
      setCount(prev => prev - 1)
    } else {
      setCount(prev => prev - prev)
    }
  }
  function handleColor() {
    if (count === 0) {
      setColor('grey');
    } else if (count > 0) {
      setColor('red');
    } else {
      setColor('blue');
    }
  }

  useEffect(handleColor, [count]);
  return (
    <>
      <Temp count={count} color={color} />
      <div className='buttons'>
        <Button data={'-'} func={handleCount} backGround={'blue'} />
        <Button data={'Reset'} func={handleCount} backGround={'grey'} />
        <Button data={'+'} func={handleCount} backGround={'red'} />
      </div>
    </>
  )
}

export default App
