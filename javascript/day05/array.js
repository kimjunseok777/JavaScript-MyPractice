
const arr = ["김준석", "짱구", "마이멜로디"]
arr.push("해피캣")
console.log(arr) // 김준석 짱구 마이멜로디 해피켓

arr.pop()
console.log(arr) // 김준석 짱구 마이멜로디

arr.unshift("쿠로미")
console.log(arr) // 쿠로미 김준석 짱구 마이멜로디

arr.shift()
console.log(arr) // 김준석 짱구 마이멜로디

// 만약 arr에 쿠로미가 없다면 쿠로미를 맨 끝 요소로 추가해라
console.log(arr.includes("쿠로미"))

if(!arr.includes("쿠로미")) {
    console.log("test") //--> "쿠로미가 없으면" 이라는 조건이 true 인지 확인하기 위한 콘솔로그 (이런 확인 과정들 필요!!!)
    arr.push("쿠로미")
}
console.log(arr)

//-------------------------------
function 쿠로미() {
    if(arr.indexOf("쿠로미") < 0) {return console.log(arr.push("쿠로미"))}
    //--> 배열은 0부터 시작하기에 마이너스로 가면 없는 것이다
}
쿠로미()
console.log(arr)
//-------------------------------

// 로직(코드, 기능)을 설계하는 사람은 나 자신이다
// 내가 의도한 대로의 값이 나왔는지 확인하는 과정이 굉장히 중요하다
// "나는 if 에 쿠로미가 없다면" 이라는 값을 넣을 거야

//-------------------------------

const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]
arr2.concat(arr1)
console.log(arr2) // 5 6 7 8  //--> 반환하는 함수이기에 새로운 배열을 만들어줘야한다

const arr3 = arr2.concat(arr1)  //--> 반환하는 함수이기에 새로운 변수에 담아준 것이다
console.log(arr3) // 5 6 7 8 1 2 3 4 //--> arr2에서 합쳐가지고 5678 먼저이다

//-------------------------------

const apart = ["짱구", "오수", "스폰지밥", "훈이", "징징이"]
const apart_1 = apart.slice(1,3) // 오수 스폰지밥
const apart_2 = apart.slice(2) // 스폰지밥 훈이 징징이
const apart_3 = apart.slice(-3, -1) // 스폰지밥 훈이 //--> 뒤에서 시작하는 것은 0이 아닌 -1 부터이다 (end값은 마찬가지로 미포함)

console.log(apart_1, apart_2, apart_3)

// 위에 있는 문제에 마지막 인덱스에 있는 값 가져오기
apart[apart.length - 1]  //--> 길이는 1부터 시작하고, 인덱스는 0부터 시작하기에 -1 을 해준 것
apart[4] //--> 확장에 용이하지 않기 때문에 이렇게 마지막 값 가져오지 말기 (배열이 추가되면 또 바꿔줘야한다)
//* 관리할 포인트를 줄이는 것이 확장에 용이하다 *

apart.at(-1) // ES2020 에서 가능한 마지막 요소 가져오기에 편리한 기능중 하나 => at(-1)


//-------------------------------


apart.splice(2, 2, "배고파요", "졸려요", "추워요")
console.log(apart) // 짱구  오수  배고파요  졸려요  추워요  징징이
// item 부분은 사라진 갯수에 제한되어 추가되는 것이 아닌, "기재한 모든 객체"들이 추가된다



