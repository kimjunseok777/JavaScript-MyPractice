
const arr = ["김준석", "짱구", "마이멜로디"]
console.log(arr)

// 만약 arr에 쿠로미가 없다면 쿠로미를 맨 끝 요소로 추가해라

if(arr.includes('쿠로미') == false) arr.push('쿠로미')
// if(arr.indexOf('쿠로미') == -1) arr.push('쿠로미')

console.log(arr)