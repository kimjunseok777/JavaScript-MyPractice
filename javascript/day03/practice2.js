
function a(param) {
    console.log(param)
}
a("false")

let b = (abc) => {
    console.log(abc)
}
b("star")

//---------------------------------------

function func(num1, num2, callback) {
    let result = num1 + num2;
    callback(result)
}
func(2, 7, (res) => {
    console.log(res) // 9
})

//---------------------------------------

let callback1 = (res) => {
    console.log(res)
}
callback1(5)

function callback2(res) {
    console.log(res)
}
callback2(7)



function f(n) {
    console.log(n)  //--> 콘솔이 밑에 if문 보다 밑에 있으면 2까지 반복되고 1을 반환하고 끝난다 --> return 1 먹으면 1을 출력하는 게 아닌 반환한다
    if(n <= 1) return 1
    return n + f(n-1)
}
f(10);