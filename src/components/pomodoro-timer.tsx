import React, { useEffect, useState, useCallback } from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToMinutes } from '../utils/seconds-to-time';
import { Timer } from './timer';
import { secondsToHours } from '../utils/seconds-to-hours';

const bellStart = require('../sounds/bell-start.mp3');
const bellFinish = require('../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props{
    PomodoroTimer: number;
    ShortRestTime: number;
    LongRestTime: number;
    Cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element{
    const [mainTime, setMainTime] = React.useState(props.PomodoroTimer);
    const [timeCouting, setTimeCouting] = React.useState(false);
    const [working, setWorking] = React.useState(false);
    const [resting, setResting] = React.useState(false);
    const [cyclesQtdManager, setCyclesQtdManager] = React.useState(
        new Array(props.Cycles - 1).fill(true),
    );
    
        const [completedCycles, setCompletedCycles] = React.useState(0);
        const [fullWorkingTime, setFullWorkingTime] = React.useState(0);
        const [numberOfPomodoros, setNumberOfPomodoros] = React.useState(0);



    useInterval(() => {
        setMainTime(mainTime - 1);
        if (working) setFullWorkingTime(fullWorkingTime + 1);
    }, 
    timeCouting ? 1000 : null,
    );

    const configWork = useCallback(() => {
        setTimeCouting(true);
        setWorking(true);
        setResting(false);
        setMainTime(props.PomodoroTimer)
        audioStartWorking.play();
    },[
        setTimeCouting,
        setWorking,
        setResting,
        setMainTime,
        props.PomodoroTimer,
    ]);

    const configRest = useCallback((Long: boolean) => {
        setTimeCouting(true);
        setWorking(false);
        setResting(true);

        if (Long) {
            setMainTime(props.LongRestTime);
        } else {
            setMainTime(props.ShortRestTime);
        }
        audioStopWorking.play();
    }, [setTimeCouting,
        setWorking,
        setResting,
        setMainTime,
        props.LongRestTime,
        props.ShortRestTime,]);

    useEffect(() => {
        if (working) document.body.classList.add('working');
        if (resting) document.body.classList.remove('working');
    
        if (mainTime > 0) return;
        if (working && cyclesQtdManager.length > 0) {
            configRest(false);
            cyclesQtdManager.pop();
        } else if (working && cyclesQtdManager.length <= 0) {
            configRest(true);
            setCyclesQtdManager(new Array(props.Cycles - 1).fill(true));
            setCompletedCycles(completedCycles + 1);
        }

        if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
        if (resting) configWork();
    }, 
    [
        working,
        resting,
        mainTime, 
        configRest, 
        setCyclesQtdManager,
        numberOfPomodoros, 
        cyclesQtdManager, 
        configWork,
        completedCycles,
        props.Cycles,
    ]); 

    return (
    <div className='pomodoro'>
        <h2>You are: {working ? 'Working' : 'Resting'}</h2>
        <Timer mainTime={mainTime} />
        
        <div className='controls'>
            <button onClick={() => configWork()}>Work</button>
            <button onClick={() => configRest(false)}>Rest</button>
            <button 
            className={!working && !resting ? 'hidden' : ''}
            onClick={() => setTimeCouting(!timeCouting)}>
                {timeCouting ? 'Pause' : 'Play'}
            </button>
        </div>
        <div className='datails'>
            <p>Ciclos Concluidos: {completedCycles} </p>
            <p>Horas Trabalhadas: {secondsToHours(fullWorkingTime)} </p>
            <p>Pomodoros concluídos: {numberOfPomodoros} </p>
        </div>
    </div>
    );
}