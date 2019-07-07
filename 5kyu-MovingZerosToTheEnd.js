/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

3줄 요약
1. 처음에는 하나의 배열로 0을 검출해서 뒤에 붙이는 식으로 문제에 접근하다가
2. 그냥 0을 검출하고 그 후에 0이 없는 배열에 붙이는 것이 반복문을 분리 할 수 있을것 같아서 문제를 풀었다.
3. 다른 사람의 풀이를 보니 배열을 합칠 때 concat을 쓰던데 destructuring으로 배열을 만드는 것과 어떤 차이가 있는지 궁금하다.

*/


var moveZeros = function (arr) {
    // TODO: Program me
    const notZero = arr.filter(a => a !== 0);
    const zeros = arr.filter( b => b === 0);
    return [...notZero, ...zeros];
  }