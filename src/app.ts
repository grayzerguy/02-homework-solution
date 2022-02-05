import fs from 'fs';
import { findPrimes } from './find-primes ';

const result = findPrimes(1, 40);

 result.primes.forEach(p => console.log(p));
//  console.log(result);
// console.log(result.primes)
