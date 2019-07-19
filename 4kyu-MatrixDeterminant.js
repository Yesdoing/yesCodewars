/*
Description:
Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

3줄 요약:
1. 문제를 크게 3가지로 나누었다. 1. 행렬의 크기가 2 이하일때 처리. 2. 크기가 2이상 일 때, 행렬식의 부분 배열을 구하기 3. 구한 배열로 값을 구하기.
2. 부분 배열을 구할 때, 3차원 배열을 splice로 통해 나누었으나 slice를 통해 구하는게 어떨까 하는 생각이 들었다. 
3. 2중 반복문을 어떻게 제거할 수 있을까?
*/

function determinant(m) {
    let value = 0;
      if(m.length === 1) return m[0][0];
      else if(m.length === 2) return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]);
      else {
        let result = [];
        for(let i=0; i<m.length; i++) {
          let arr2 = [];
          for(let j=1; j<m.length; j++) {
            let arr = [...m[j]];
            arr.splice(i, 1);
            arr2.push(arr);
            }
          result.push(arr2);
        }
        for(let i=0; i<m[0].length; i++) {
          if(i === 0) value = m[0][i] * determinant(result[i]);
          else if(i%2 === 1) value -= m[0][i] * determinant(result[i]);
          else value += m[0][i] * determinant(result[i]);
        } 
    }
      return value;
    };