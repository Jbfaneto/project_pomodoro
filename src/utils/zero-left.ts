// Function used to add a zero to the left of the number and export to be used on Seconds to Hours and Seconds to Time.

const zeroLeft = (n : number ) => Math.floor(n).toString().padStart(2, '0');
export{zeroLeft}