/*
 Problem:
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

3줄 요약
1. 도시의 최초 인구가 주어지고 매년 인구가 퍼센트로 증가하고 새로운 인구가 50명 씩 늘어난다. 
2. 이 때, 목표 인구와 같아지거나 커지는 년도는 얼마나 걸리는가? 에 대한 문제였다. 
3. 문제의 설명이 길었지만 문제만 이해하면 단순하게 반복문으로 풀 수 있는 문제였다. 독해에 대한 실력향상이 중요한듯..
*/

function nbYear(p0, percent, aug, p) {
    let population = p0 + (p0 * (percent / 100)) + aug;
    let i = 1;
    
    while(population < p) {
      population = population + ( population * (percent / 100)) + aug;
      i += 1;
    }
    
    return i;
}
