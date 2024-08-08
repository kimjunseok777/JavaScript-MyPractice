
// 콜백함수 (() => {})

// function func(num1, num2, callback) {
//     let result = num1 + num2
//     callback(result)
// }

// func(2, 3, (res) => {
//     console.log(res)
// })

// 콜백함수 : (() => {})
// 고차함수 쪽에서 많이 쓰인다

//--------------------------------------------------

// 재귀함수

// function hello() {
//     console.log("안녕하세요")
//     hello()
// }
// hello()

//--------------------------------------------------

// quiz - 재귀함수
function f(n) {
    if(n <= 1) return 1  //--> 무한반복 실행을 막아주는 조건문의 return
    return n + f(n-1)  //--> + f(n-1) + f(n-1) + f(n-1)...  이렇게 계속 반복되는 것이다
    //--> 위의 f(n-1) 이 재귀함수 역할을 한다
}
// f(10)
console.log(f(10))