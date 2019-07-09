/*

Description:
We want to create a function that will add numbers together when called in succession.

add(1)(2);
// returns 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15
and so on.

A single call should return the number passed in.

add(1); // 1
We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // 2
addTwo + 5; // 7
addTwo(3); // 5
addTwo(3)(5); // 10
We can assume any number being passed in will be valid whole number.

3줄 요약:
1. currying 문제라는 것을 인지하고 커링하는 법을 검색하여 풀었다.
2. 사실 call을 하지 않고 add를 호출할 때 인자에서 더해도 함수는 동작한다. 
3. valueOf 와 toString의 동작의 차이를 알게되었다. 
*/ 

function add(n){
    const nextAdd = args => add.call(null, n + args);
    nextAdd.valueOf = () => n;
    nextAdd.toString = () => n;
    return nextAdd;
  }