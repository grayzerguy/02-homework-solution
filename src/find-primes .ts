export function findPrimes(num1:number,num2:number): {
    primes: number[];
    } {
    let primes: number[] = [];
    
    for (let i: number = num1; i <= num2; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return {
        primes: primes,
    };
}
    function isPrime(num: number): boolean {
    if (num <= 2 ) {
        return false;
    }
    for (let i: number = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// function findPrimes2(num1:number,num2: number)