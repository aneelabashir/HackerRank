function countAnalogousArrays(consecutiveDifference, lowerBound, upperBound) {
    const n = consecutiveDifference.length;
    let count = 0;

    // Find the upper limit for the starting value
    const maxStartValue = upperBound - (n - 1) * Math.min(...consecutiveDifference);

    // Iterate over possible starting values
    for (let startValue = lowerBound; startValue <= maxStartValue; startValue++) {
        let isValid = true;
        let currentValue = startValue;

        // Check each consecutive value
        for (let i = 0; i < n; i++) {
            if (currentValue < lowerBound || currentValue > upperBound) {
                isValid = false;
                break;
            }

            currentValue -= consecutiveDifference[i];
        }

        if (isValid) {
            count++;
        }
    }

    return count;
}


// Example usage:
const consecutiveDifference = [-1, -3, 2];
const lowerBound = 2;
const upperBound = 8;
const result = countAnalogousArrays(consecutiveDifference, lowerBound, upperBound);
console.log(result);
