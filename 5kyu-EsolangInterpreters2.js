/*
Desciption:
Here are a list of commands in Smallfuck:

> - Move pointer to the right (by 1 cell)
< - Move pointer to the left (by 1 cell)
* - Flip the bit at the current cell
[ - Jump past matching ] if value at current cell is 0
] - Jump back to matching [ (if value at current cell is nonzero)
As opposed to Brainfuck where a program terminates only when all of the commands in the program have been considered (left to right), Smallfuck terminates when any of the two conditions mentioned below become true:

All commands have been considered from left to right
The pointer goes out-of-bounds (i.e. if it moves to the left of the first cell or to the right of the last cell of the tape)
Smallfuck is considered to be Turing-complete if and only if it had a tape of infinite length; however, since the length of the tape is always defined as finite (as the interpreter cannot return a tape of infinite length), its computational class is of bounded-storage machines with bounded input.

code - Required. The Smallfuck program to be executed, passed in as a string. May contain non-command characters. Your interpreter should simply ignore any non-command characters.
tape - Required. The initial state of the data storage (tape), passed in as a string. For example, if the string "00101100" is passed in then it should translate to something of this form within your interpreter: [0, 0, 1, 0, 1, 1, 0, 0]. You may assume that all input strings for tape will be non-empty and will only contain "0"s and "1"s.
Your interpreter should return the final state of the data storage (tape) as a string in the same format that it was passed in. For example, if the tape in your interpreter ends up being [1, 1, 1, 1, 1] then return the string "11111".

3줄요약:
1. code와 tape를 배열로 분리하여 배열을 돌며 code의 index 에 맞는 처리를 switch 함수를 통해 구현하였다.
2. 지문에서 결과를 구하기 위한 조건을 제대로 명시하지 않아 시간이 많이 걸렸다.
3. 다음에 이런 문제 나오면 다른 문제를 풀어야겠다..
*/

function interpreter(code, tape) {
  const stack = [];
  const arr = tape.split("");
  const operation = code.split("");
  let index = 0;

  for (let i = 0; i < operation.length; i++) {
    switch (operation[i]) {
      case "*":
        arr[index] = arr[index] === "0" ? "1" : "0";
        break;
      case "[":
        if (arr[index] !== "0") {
          stack.push({ bkt: code[i], tapeIndex: index, codeIndex: i });
        } else {
          i = !stack.length ? code.lastIndexOf("]") : code.indexOf("]");
        }
        break;
      case "]":
        let loopStartIndex = stack[stack.length - 1].tapeIndex;
        if (arr[loopStartIndex] === "0") {
          stack.pop();
        } else {
          i = stack[stack.length - 1].codeIndex;
        }

        break;
      case ">":
        if (index > arr.length - 1) break;
        index++;
        break;
      case "<":
        if (index < 0) break;
        index--;
        break;
    }
    if (index < 0 || index >= arr.length) break;
  }

  return arr.join("");
}
