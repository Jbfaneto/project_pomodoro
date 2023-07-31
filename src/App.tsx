import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';


function App() {
  return (
    <div className="container">
      <PomodoroTimer PomodoroTimer={1500}
       ShortRestTime={300}
       LongRestTime={900}
       Cycles={4}
       />
    </div>
  );
}

export default App;
