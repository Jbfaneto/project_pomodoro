import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
interface Props{
    DefaultPomodoroTimer: number;
}

export function PomodoroTimer(props: Props): JSX.Element{
    const [mainTime, setMainTime] = React.useState(props.DefaultPomodoroTimer);
    useInterval(() => {
        setMainTime(mainTime - 1);
    }, 1000);
    return (
    <div className='pomodoro'>
        <h2>You are: working</h2>
        <button onClick={() => console.log(1)}>test</button>
    </div>
    );
}