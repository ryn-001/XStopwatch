import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [seconds,setSeconds] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [button,setButton] =  useState('Start');
  const time = useRef();

  const handleStartStop = async (e) => {
    if(e.target.value === 'Start'){
      setButton('Stop');
      time.current = setInterval(() => {
        if(seconds + 1 === 60){
          setMinutes(prev => prev+1);
          setSeconds(0);
        }
        else setSeconds(prev => prev+1);
      }, 1000);
    }else{
      setButton('Start');
      clearInterval(time);
      setMinutes(0), seconds(0);
    }
  }

  const handleReset = () => {
    clearInterval(time);
    setSeconds(0), setMinutes(0);
  }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {minutes > 10 ? minutes : `0${minutes}`}:{seconds > 10 ? seconds : `0${seconds}`}</p>
      <button value={button} onClick={handleStartStop}>{button}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
