
function addNumberPrint (num1, num2) {
    return num1 + num2
}
let a = addNumberPrint (2, 3)
let b = a + 5
console.log(b) // 10
//-------------------------------------
function addNumber (num1, num2) {
    console.log(num1 + num2) //--> 즉, 함수는 이런 기능을 언제든지 재사용하고 싶을 때 사용하는 것
}
addNumber(2,4)
addNumber(2,5)
addNumber(2,6)
addNumber(2,7)

//-------------------------------------

function printHello (_num) {
    console.log(_num+b)
}
printHello(3)
printHello(0)
printHello(0)
printHello()

function callback2 (res) {
    console.log(res) // 7
}
callback2(7)

let callback3 = (res) => {
    console.log(res) // 8
}
callback3(8)
