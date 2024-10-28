function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
}

function sumPrimes(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i; // Add the prime number to the sum
        }
    }
    return sum; // Return the total sum of primes
}

// Example usage:
const number = 10;
const result = sumPrimes(number);
console.log(result)
