/*
Description:
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

3줄요약:
1. 4kyu 문제치곤 쉽다고 이렇게 쉬울리가 없다고 생각했는데 역시 BigInt가 문제에 포함되어 있었다.
2. JS는 BigInt 내장 객체를 사용할 시 큰 값의 뒤에 n을 붙여 표현하기때문에 문제와 맞지 않다고 생각했다. 
3. 다른사람의 풀이도 비슷한 것 같은데 좀 더 깔끔하게 풀은것같다. 
*/

function sumStrings(a, b) {
  if (a.length < b.length) a = a.padStart(b.length, "0");
  else if (b.length < a.length) b = b.padStart(a.length, "0");
  let sumNum = 0;
  let a_arr = a.split("").reverse(),
    b_arr = b.split("").reverse();

  var result = a_arr.map((item, index) => {
    if (sumNum > 0) {
      item = +item + 1;
      sumNum = 0;
    }
    let num = +item + +b_arr[index];

    if (num >= 10) {
      sumNum = 1;
      num = num % 10;
    }

    return num;
  });

  if (sumNum > 0) {
    result.push(1);
  }

  result = result.reverse();

  while (result[0] === 0) {
    result.shift();
  }

  return result.join("");
}
