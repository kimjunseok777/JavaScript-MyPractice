
// 연락처 "010-1234-1234"
// 해당 연락처의 가운데 숫자를 *로 표기하여 반환하는 함수를 작성
// 매개변수에는 '문자열 연락처'가 '입력 값'으로 들어갑니다
// 출력 값은 ''010-****-1234"

/*
    핸드폰번호의 가운데 숫자를 특정한 암호화된 값으로 대체해야한다
    문자열의 특정한 인덱스번호를 대체
*/

// 핸드폰 번호의 가운데 숫자 4가지를 가지고 오는 방법
const ph = "010-1234-1234"
const splitPh = ph.split("-") // [010, 1234, 1234] //-> "문자열"을 "배열"로 변경해서 변수에 담아준 것이다
// console.log(splitPh)
splitPh[1] = "****"
console.log(splitPh.join("-"))

//-------------------------------------------------------

// 함수로 만드는 법
function hashedPhoneNumber(phone) {
    const splitPhone = phone.split("-")
    splitPhone[1] = "****"
    const hashedPh = splitPhone.join("-")
    return hashedPh
}
hashedPhoneNumber("010-1234-1234")
hashedPhoneNumber("010-1234-5678")
hashedPhoneNumber("010-1234-9999")
// 함수를 사용하는 이유는 여러분이 작성하는 코드를 재사용하기 위함