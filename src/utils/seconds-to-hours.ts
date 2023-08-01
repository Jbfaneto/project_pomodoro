import { zeroLeft } from "./zero-left";
// Function used to convert seconds to hours and export to be used on pomodoro app.
export function secondsToHours(seconds: number): string {
    const hours = zeroLeft(seconds / 3600);
    const min = zeroLeft((seconds / 60) % 60);
    const sec = zeroLeft((seconds % 60) % 60);
    return `${hours}:${min}:${sec}`;
}