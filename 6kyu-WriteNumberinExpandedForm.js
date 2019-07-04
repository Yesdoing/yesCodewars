
/*
Problem: 

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

3줄 요약: 
1. 처음 문제를 접하고 매개인자를 받아 문자열로 치환 후 반복문으로 결과를 만들자고 생각 한 후 문제를 풀었음.
2. 풀고 난 후 다른 사람의 풀이를 봤는데 collection를 사용해서 깔끔하게 푼 해답들을 보고 아직 collections 활용 방법이 미숙하다고 느낌..
3. 다음에는 최대한 for 문을 안쓰면서 문제를 해결하도록 해야겠다.

다른사람의 풀이: 
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
*/

function expandedForm(num) {
    const str = num + '';
    let result = parseInt(str[0], 10) * Math.pow(10, str.length-1) + '';
    for(let i=1; i<str.length; i++) {
      const num = parseInt(str[i], 10) * Math.pow(10, str.length-(1+i));
      if( num !== 0 ) result += ` + ${num}`; 
      else continue;
    }
    return result;
}
  
  