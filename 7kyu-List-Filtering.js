/*
    Problem:
        In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

    Example:
    filter_list([1,2,'a','b']) == [1,2]
    filter_list([1,'a','b',0,15]) == [1,0,15]
    filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

    3줄 요약:
    1. 문제를 읽었을 때 데이터를 조건을 기준으로 분류하는 문제라고 이해했다. 
    2. JavaScript의 Array의 내장함수 중에 filter라는 함수를 사용하여 문제를 해결 하였다.
    3. 냉무.
*/ 

function filter_list(l) {
    return l.filter(v => typeof v == 'number');
}
  