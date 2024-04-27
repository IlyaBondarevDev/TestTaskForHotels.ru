const applyDeclination = (amount) => {
    let lastTwoDigit = amount % 100;
    let lastDigit = amount % 10;
    let declination = '';

    if ((lastTwoDigit > 10 && lastTwoDigit < 20) || lastDigit > 4 || lastDigit === 0)
        declination = 'ов';
    else if (lastDigit > 1) 
        declination = 'а';

    return `${amount} компьютер${declination}`;
}

for (let i = 0; i < 101; i++)
    console.log(applyDeclination(i))
