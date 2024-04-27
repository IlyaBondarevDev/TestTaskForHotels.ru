const findCommonDivisors = (array) => {
    let commonDivisors = [];
    if (array.length === 0) return commonDivisors;

    let limit = Math.min(...array);

    for (let i = 2; i <= limit; i++) {
        let isDivisor = true;
        for (let j = 0; j < array.length; j++) {
            if (array[j] % i !== 0) {
                isDivisor = false;
                break;
            }
        }
        if (isDivisor) commonDivisors.push(i);
    }

    return commonDivisors;
}

console.log(findCommonDivisors([42, 12, 18]));