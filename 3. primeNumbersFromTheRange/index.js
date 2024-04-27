const primeNumbersFromTheRange = (min, max) => {
    let primeNumbers = [];

    for (let i = min; i <= max; i++) {
        if (isPrimeNumber(i)) primeNumbers.push(i);
    }

    return primeNumbers;
}

const isPrimeNumber = (number) => {
    let isPrime = true;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    for (let i = 3; i < number; i += 2) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

console.log(primeNumbersFromTheRange(0, 100));