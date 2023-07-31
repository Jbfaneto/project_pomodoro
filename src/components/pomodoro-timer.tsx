import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Timer } from './timer';
interface Props{
    PomodoroTimer: number;
    ShortRestTime: number;
    LongRestTime: number;
    Cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element{
    const [mainTime, setMainTime] = React.useState(props.PomodoroTimer);
    useInterval(() => {
        setMainTime(mainTime - 1);
    }, 1000);
    return (
    <div className='pomodoro'>
        <h2>You are: working</h2>
        <Timer mainTime={mainTime} />
        <div className='controls'>
            <button onClick={() => console.log(1)}>test</button>
            <button onClick={() => console.log(1)}>test</button>
            <button onClick={() => console.log(1)}>test</button>
        </div>
    </div>
    );
}