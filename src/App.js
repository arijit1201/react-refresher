import './App.css';
import { useEffect, useState } from 'react'

const App = () => {
  
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("The counter has been updated to "+counter)
    
  }, [counter]);
  
  return (
    <div className="App">
      <button onClick={() => {
        
        setCounter((prevCount) => {
            return prevCount-1
        })}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {
       
        setCounter(counter+1)}}>+</button>
    </div>
  );
}

export default App;
