
function a() {
    let a = 5; // 지역 변수 a
    console.log(a) // 5
    a = 10; //-> 코드 블럭 내이기 때문에 a 는 10 로 바뀐다 (지역변수)
    console.log(a) // 10
}
a() // 5 -> 여기서 a는 계속 5이다 (10으로 바뀌지 않는다) (위에 블럭 내에서만 a=10 로 바뀐 것이다)


let f;
function c() {
    f = 7;
}
c() // f = 7
console.log(f) // 7

function d() {
    f += 2
}
console.log(f) // 7 //--> d 실행시켜주기 전이라 9가 아니라 7이 나오는 것

d() //--> f = 9
console.log(f) // 9