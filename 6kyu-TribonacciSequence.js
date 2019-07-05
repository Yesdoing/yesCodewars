/*

Problem:
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

3줄 요약:
1. 피보나치 수열을 까먹어서 위키피디아에 다시 검색해서 문제를 이해했다. 
2. 문제를 풀 때 내장함수를 사용할까 배열에 바로 접근으로 풀까 고민을 하다가 내장 함수를 사용하면 불필요한 반복을 할 것 같아 직접 접근을 풀었다. 
3. 다른 사람의 풀이를 보니 불필요한 변수의 선언을 줄여야 하는지 고민된다..
*/

function tribonacci(signature,n){
    //your code here
    if(n === 0) return [];
    if(n < 3) return signature.splice(0, n);
    let i = 0;
    
    while(i < n-3) {
      let fibo = signature[i] + signature[i+1] + signature[i+2];
      signature.push(fibo);
      i++;
    }
    
    return signature;
  }