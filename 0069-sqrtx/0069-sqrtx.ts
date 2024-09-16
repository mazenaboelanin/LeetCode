function mySqrt(x: number): number {
    if (x < 0) return NaN; // Return NaN for negative numbers
    if (x === 0) return 0; // Return 0 for 0

    let guess = x;
    const accuracy = 0.00001; // Define how accurate you want the result to be

    while ((guess * guess) - x > accuracy) {
        guess = (guess + x / guess) / 2;
    }

    return Math.floor(guess);
}