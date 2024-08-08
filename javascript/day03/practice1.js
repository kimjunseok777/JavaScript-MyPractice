
function addNumber(num1, num2) {
    return num1 + num2 // return으로 반환해줬기 때문에 밑에 코드블럭 밖에서도 이 연산식을 사용할 수 있는 것이다
}
let a = addNumber(1, 2) // 3  -->  a는 3으로 선언된 것이다 -> 다음에 "a = ~"이라고 바꿔주지 않는 이상 3으로 유지된다
console.log(a)

console.log(addNumber(1, 3), a) // 4 3
console.log(addNumber(addNumber(1, 3), a)) // 7  -->  addNumber는 두 수를 더하는 연산으로 return 되었다
// ==> 이런 식으로 괄호 안에 또 괄호를 생성해줘서 식을 이어서 작성할 수 있다



