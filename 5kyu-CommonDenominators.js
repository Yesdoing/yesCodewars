const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1); // 배열을 순회하면서 모든 수에 대한 최소공배소를 구합니다. (공통 분모)
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join(''); // 구해진 공통 분모로 결과값을 만듭니다. 
}

const s1Arr = s1.split("")
.filter(a => 96 < a.charCodeAt(0) && 123 > a.charCodeAt(0))
.sort()
.forEach( a => s1Map.has(a) ? s1Map.set(a, s1Map.get(a)++) : s1Map.set(a, 1));
