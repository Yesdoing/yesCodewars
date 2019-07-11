/*

Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency

3줄 요약:
1. 처음에는 반복문을 돌면서 두 방정식의 계산 값을 하나의 배열엘 다 넣고 마지막에 중복되는 값을 Set으로 제거해서 정렬하였으나 답이 틀렸다고 나왔다. 
2. 반복문 안에 값을 넣을 때 마다 정렬을 해서 테스트 코드는 통과하였으나 결과는 시간초과가 발생하였다. 
3. 고민하다 검색을 한 결과 두개의 값을 따로 두고 처리하면서 증가하는 방식을 보고 문제를 풀었다.
*/

function dblLinear(n) {
    // your code
    let arr = [1], y=0, z=0;
    
    while(arr.length <= n) {
      let a = 2 * arr[y] + 1;
      let b = 3 * arr[z] + 1;
      
      if(a < b) {
        arr.push(a);
        y += 1;
      } else if(a > b) {
        arr.push(b);
        z += 1;
      } else {
        arr.push(a);
        y += 1;
        z += 1;
      }
    }

    return arr[n];
}
