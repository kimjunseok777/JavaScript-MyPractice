
// 연락처 "010-1234-1234"
// 해당 연락처의 가운데 숫자를 *로 표기하여 반환하는 함수를 작성
// 변환하는 함수를 작성
// 매개변수에는 '문자열 연락처'가 '입력 값'으로 들어갑니다
// 출력 값은 ''010-****-1234"

// "split" 풀이

function phone(num) {
    let arr = num.split("-") //--> 반환해주는 것이기에 새로운 변수에 담아준 것이다
    arr[1] = "****"
    const arr2 = arr.join("-") //--> 배열 내장함수 join 도 반환해주는 것이기에 새로운 변수에 담아준 것이다
    console.log(arr2)
}

phone("010-1234-1234") // 실행
phone("010-1234-5678") // 실행
// ==> 이렇게 함수를 사용하는 이유는, 내가 만든 기능(코드)이 재사용이 가능하다는 장점이 있다