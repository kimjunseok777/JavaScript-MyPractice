
// 선언부
function addNumberPrint (num1, num2) {
    console.log(num1 + num2) // 5
}
// 실행부, 매개변수
addNumberPrint (2, 3) // 5 --> 위에 콘솔로그를 선언부에 적어줬기 때문에 출력이 된다
console.log(addNumberPrint(2, 3))  // undefined --> 이렇게 나오는 이유는 "addNumberPrint" 에서는 5가 출력 되지만,
                                                                // "콘솔로그"는 실행되지 않기에 undefined 가 뜬다. 이유는 선언부에 return 해주지 않았기 때문
                                                                // return해주면, return된 값으로 코드블럭 밖에서 연산해줄 수 있다 --> 5가 뜬다

addNumberPrint (2, 3)
addNumberPrint (-1, 3)
addNumberPrint (2, 7)
addNumberPrint (6, 6) // -> 터미널에서 확인해보면 이렇게 "실행부"를 기재해줄 때마다 "선언부"가 작용하는 것을 알 수 있다

// return
function addNumber (num1, num2) {
    // 매개변수는 코드블럭 다르면 중복선언 가능
    return num1 + num2  //--> 여기선 선언부에 콘솔로그가 아닌, return으로 반환해줬기 때문에, 여기서 출력되지 않는다
                                          //--> 연산식을 반환하는 addNumber 를 만든 것
}
const a = addNumber(2, 3) // 5  -->  이런식으로 연산식을 코드 블럭 바깥에서도 사용할 수 있게 된다
const b = a + 2 // 7
console.log(b + 3) // 10 --> 출력

/*
    자연어 풀이:
        나는 "출력" 할 함수를 만들 거야 --> return할 필요 없음
        나는 "반환" 할 함수 값을 만들어서, 이 함수의 연산식을 다음에도 사용할 거야 --> return 해야함

        ==> 위에 코드들을 비교해보자면 return 이 아닌 1번코드는 연산속도가 빠르고, 2번코드는 확장성이 좋다 (차이 거의 없다)
*/