/*
Description: 
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

3줄요약:
1. 이번 문제는 설명에서 풀이에 대한 방정식이 적흰 사이트를 제공해 주었고 팩토리얼을 구하는 것이 아니라는게 명시 되어있어서 어떤 결과를 내야하는지 이해하기 쉬웠다.
2. 근데 사이트의 풀이에 대한 식을 해석 못해 시간이 걸렸다..
3. Math 라이브러리가 정말 편리하지만 다른 언어의 내장 라이브러리에 비해 부족한 것 같다..

*/

function zeros (n) {
    if(n === 0) return 0;
    let sum = 0;
    const results = Math.round(getBaseLog(n));
    
    for(let i = 1; i<=results; i++) {
      sum += Math.floor(n / Math.pow(5, i));
    }
      
    return sum;
  }
  
  function getBaseLog(y) {
    return Math.log(y) / Math.log(5);
  }