/*
Description:
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. Each parameter will be a string separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

3줄 요약
1. 처음에 문제를 잘못 이해해서 Worth의 뜻을 정확히 파악하지 못하였다.
2. 문제를 좀 더 꼼꼼히 읽는 노력을 해야겠다. 
3. 풀이 자체는 두 매개변수의 값을 구해 비교를 하면 되서 reduce를 사용해서 문제를 풀었다.

*/

function goodVsEvil(good, evil){
    const goodWorth = [1, 2, 3, 3, 4, 10];
    const evilWorth = [1, 2, 2, 2, 3, 5, 10];
    const countOfGood = good.split(" ").reduce((acc, cur, index) => acc + (cur*goodWorth[index]), 0);
    const countOfEvil = evil.split(" ").reduce((acc, cur, index) => acc + (cur*evilWorth[index]), 0);
    
    if ( countOfGood === countOfEvil) {
      return "Battle Result: No victor on this battle field";
    }
    if(countOfGood > countOfEvil) {
        return "Battle Result: Good triumphs over Evil";
    }
    return "Battle Result: Evil eradicates all trace of Good";
}
  