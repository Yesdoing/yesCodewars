
/*
Description:
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

3줄 요약:
1. 처음 문제를 해석할 때 주어진 데이터를 분해해서 주어진 조건에 맞게 데이터를 재결합 하는 문제라고 이해했다.
2. 데이터를 분해할때 Map을 사용하고 이후 결과 값을 구할 때 여기서 또 배열에 값들을 집어넣어서 결과 값을 구했는데 이 부분을 좀 더 개선할 수 있을것같다.(다름 사람의 풀이에는 Math.max를 이용해 바로 정답을 구함)
3. 정렬을 할때도 조건 식이 너무 길어지는게 마음에 걸리는데 이 부분을 더 개선할 수 있을 것 같다.
*/

function mix(s1, s2) {
  const mapS1 = new Map();
  const mapS2 = new Map();
  const resultS1 = [];
  const resultS2 = [];
  const resultEqual =[];
  s1.split("").filter(a => a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122).forEach(a => {
    if(!mapS1.has(a)) mapS1.set(a, 1);
    else mapS1.set(a, mapS1.get(a) + 1);
  });
  s2.split("").filter(a => a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122).forEach(b => {
    if(!mapS2.has(b)) mapS2.set(b, 1);
    else mapS2.set(b, mapS2.get(b) + 1);
  });
  
  deleteOneProp(mapS1);
  deleteOneProp(mapS2);

  for([key, value] of mapS1.entries()) {
    const m2value = mapS2.get(key);
    if(!mapS2.has(key)) {
      resultS1.push(`1:${"".padEnd(value, key)}`);
    } else if(m2value < value) {
      resultS1.push(`1:${"".padEnd(value, key)}`);
    } else if(m2value > value) {
      resultS2.push(`2:${"".padEnd(m2value, key)}`);
    } else if(m2value === value) {
      resultEqual.push(`=:${"".padEnd(value, key)}`);
    }
    
    mapS2.delete(key);
  }
  
  for([key, value] of mapS2.entries()) {
    resultS2.push(`2:${"".padEnd(value, key)}`);
  }
  
  resultS1.sort((a, b) => a.length === b.length ? a.charCodeAt(2) - b.charCodeAt(2) : b.length - a.length);
  resultS2.sort((a, b) => a.length === b.length ? a.charCodeAt(2) - b.charCodeAt(2) : b.length - a.length);
  resultEqual.sort((a, b) => a.length === b.length ? a.charCodeAt(2) - b.charCodeAt(2) : b.length - a.length);
  
  const result = [...resultS1, ...resultS2, ...resultEqual];
  
  result.sort((a,b) => a.length === b.length ? a.charCodeAt(0) === b.charCodeAt(0) ? a.charCodeAt(2) - b.charCodeAt(2) : a.charCodeAt(0) - b.charCodeAt(0) : b.length - a.length);
  
  return result.join('/');
  
  function deleteOneProp(map) {
    for( [key, value] of map.entries()) {
      if(value === 1) map.delete(key);
    }
  }
}
