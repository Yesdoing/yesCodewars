/*
Description:
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

다른사람의 풀이
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

3줄 요약:
1. 동적프로그래밍에서 메모이제이션을 할 때 굳이 모든 값을 저장할 필요는 없다.
2. min, max 문제를 풀 때 Math.min, max를 쓸려고 하자.
3. 풀고나서 멘붕하지말자.. 
*/

var maxSequence = function(arr){
    if(arr.filter(item => item >= 0).length === 0) return 0;
    const size = arr.length;
    const arr2 = [];
    let result = 0;
    
    for(let i=0; i<=arr.length; i++) {
      arr2[i] = [];
      if(i === 0) {
        arr2[i][0] = 0;
        arr2[0][i] = 0;
      } else {
        arr2[i][0] = arr[i-1];
        arr2[0][i] = 0;
      }
    }
  
    for(let i=1; i<=arr.length; i++) {
      for(let j=1; j<i; j++) {
        arr2[i][j] = arr2[i][0] + arr2[i-1][j-1];
        if(result < arr2[i][j]) result = arr2[i][j];
      }
    }
    return result;
  }