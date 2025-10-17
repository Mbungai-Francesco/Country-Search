export const numDisplay = (num: number): string => {
    let numString = num.toString();
    if (numString.length <= 3) {
        return numString;
    } 
    for (let i = numString.length - 3; i > 0; i -= 3) {
        numString = numString.slice(0, i) + "," + numString.slice(i);
    }
    return numString;
}