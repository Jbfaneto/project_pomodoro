import { zeroLeft } from "./zero-left";
//Function used to convert seconds to minutes and export to be used on pomodoro app.
export function secondsToMinutes(seconds: number): string {
    const min = zeroLeft((seconds / 60) % 60);
    const sec = zeroLeft((seconds % 60) % 60);
    return `${min}:${sec}`;
}