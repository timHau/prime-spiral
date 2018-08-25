class Prime {
  constructor() {
    this.primes = []
    this.noPrimes = [1]
    this.c = 2
  }
  
  *init() {
    while (true) {
      yield this.nextPrime()
    }
  }

  getPrimes() {
    return this.primes
  }
  
  getNoPrimes() {
    return this.noPrimes
  } 
  
  _check() {
    return { primes: this.getPrimes(), noPrimes: this.getNoPrimes() }
  }

  isPrime(n) {
    const isMultipleOfPrime = this.primes.some(p => n % p === 0)
    return !isMultipleOfPrime
  }

  nextPrime() {
    if (this.isPrime(this.c)) {
      this.primes.push(this.c)
      this.c += 1
      return this.c - 1
    } 
    this.noPrimes.push(this.c)
    this.c += 1
    return this.nextPrime()
  }
}
