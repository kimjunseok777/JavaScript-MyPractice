
/*
    // 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
    //0 < n ≤ 1000
*/
// 제한사항 : 0 < n ≤ 1000
/*
    자연어 풀이 :
    짝수인 값을 모두 나타내는 반복문을 만든다

*/
let n = 0;

function solution() {
    for(let i=0; i<=1000; i+=2) {
        n = n + i
    }
    return n
}

const num = solution()
console.log(num)
