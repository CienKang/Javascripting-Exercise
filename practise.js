let num = 153

const checkPrime = (number) =>{
    let counter = 0
    for(let i=2;i<=number;i++)
        if (number%i === 0)
            counter++
    
            return counter === 1
}

const checkArmstrong = (number) =>{
    let temp = number
    let sum = 0
    let digits = 0;

    while(temp != 0)
    {
        digits++;
        temp = Math.floor(temp/10);
    }

    temp = number;

    while(temp!=0)
    {
        sum += Math.pow(temp%10,digits);
        temp = Math.floor(temp/10);
    }
    // console.log(sum);
    return sum === number;
}

const testingNumbers = [1,2,3,4,153,121];

for(let i=0;i<testingNumbers.length;i++)
{
    console.log(testingNumbers[i]);
    if(checkPrime(testingNumbers[i]))
        console.log('Prime');
    if(checkArmstrong(testingNumbers[i]))
        console.log('Armstrong');
}