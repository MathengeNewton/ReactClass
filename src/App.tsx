import { useState } from 'react'
import './App.css'
import HomeUpdate from './OurNewComponent';

function App() {
  const [count, setCount] = useState(0);

  const hancleClick =()=> {
    setCount(count+1);
  }

  return (
    <>
      <HomeUpdate 
        ourState={count} 
        handleClick={hancleClick} 
      />
    </>
  )
}

export default App
