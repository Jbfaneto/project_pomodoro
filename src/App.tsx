import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';


function App() {
  return (
    <div className="App">
      <PomodoroTimer DefaultPomodoroTimer={120} />
    </div>
  );
}

export default App;
