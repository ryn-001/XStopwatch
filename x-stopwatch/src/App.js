import { useState, useRef } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsRunning(false);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>
      <p>
        Time: {minutes.toString().padStart(2, '0')}:
        {secs.toString().padStart(2, '0')}
      </p>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
}

export default App;
