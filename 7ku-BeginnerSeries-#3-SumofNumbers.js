/*
  Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
  Note: a and b are not ordered!

  Examples
  GetSum(1, 0) == 1   // 1 + 0 = 1
    GetSum(1, 2) == 3   // 1 + 2 = 3
    GetSum(0, 1) == 1   // 0 + 1 = 1
    GetSum(1, 1) == 1   // 1 Since both are same
    GetSum(-1, 0) == -1 // -1 + 0 = -1
    GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2  

    3줄 요약 
    1. 처음에 for문으로 풀이 했는데 시간 초과가 발생 
    2. 수를 일정하게 더해야 하는 방법 중 등차수열이 생각남.
    3. 나무위키에서 공식을 찾아 적용하여 풀었습니다. 
*/

function GetSum( a,b )
{
  let min = Math.min(a, b),
      max = Math.max(a, b);
      
  return (max - min + 1)*(min + max )/2;
}

