import { secondsToMinutes } from "../utils/seconds-to-time";
// interface containing the props of the timer
interface Props{
    mainTime: number
}

export function Timer(props: Props): JSX.Element{
    return (
       <div className="timer">{secondsToMinutes(props.mainTime)}</div> 
    );
}