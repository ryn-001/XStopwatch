import { useState, useRef } from 'react';

function App() {
  const [seconds,setSeconds] = useState(0);
  const [button,setButton] =  useState('Start');
  const time = useRef(0);
  const intervalTime = useRef();

  const handleStartStop = async (e) => {
    if(e.target.value === 'Start'){
      setButton('Stop');
      intervalTime.current = setInterval(() => {
        time.current += 1;
        setSeconds(time.current);
      }, 1000)
    }else{
      setButton('Start');
      clearInterval(intervalTime.current);
    }
  }

  const handleReset = () => {
    clearInterval(intervalTime.current);
    time.current = 0;
    setSeconds(0);
  }

  const minutes = Math.floor(seconds/60);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {minutes >= 10 ? minutes : `0${minutes}`}:{seconds%60 >= 10 ? seconds%60 : `0${seconds%60}`}</p>
      <button value={button} onClick={handleStartStop}>{button}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
