class Sieve {
  constructor() {
    this.primes = [];
  }

  generatePrimes(limit) {
    const isPrime = new Array(limit + 1).fill(true);

    // 0 and 1 are not primes
    isPrime[0] = isPrime[1] = false;

    for (let num = 2; num <= limit; num++) {
      if (isPrime[num]) {
        this.primes.push(num);
        for (let multiple = num * num; multiple <= limit; multiple += num) {
          isPrime[multiple] = false;
        }
      }
    }
  }

  NthPrime(n) {
    if (n === 0) return 2;

    if (this.primes.length > n) return this.primes[n];

    // Estimate upper limit for the nth prime using the approximation n * log(n)
    let limit = Math.ceil(n * Math.log(n) + n * Math.log(Math.log(n)));

    while (this.primes.length <= n) {
      this.generatePrimes(limit);
      limit *= 2;
    }
    
    return this.primes[n];
  }
}

module.exports = Sieve;
