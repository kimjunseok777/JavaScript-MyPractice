/*
    4개의 회원 목록이 존재합니다.
    회원 목록에는 "김사과", "이멜론", "오렌지", "박하나"
    각 회원 상세에는 나이, 키, 이름이 정의되어있습니다 -> 나이, 키 임의

    회원 목록 중 특정한 회원 사용자의 정보를 출력할 것
    prev()라는 함수를 사용하면 이 전의 사용자가 나옴
    next()라는 함수를 사용하면 이 다음의 사용자가 나온다

    단, prev 함수는 0 밑으로 내려갈 수 없습니다.
    next 함수는 회원 목록 수 이상을 넘어갈 수 없습니다.

    기본 값은 가장 첫번째 회원목록에 등록된 사용자입니다.
    ex)
        next()
        next()
        console.log() ---> 해당하는 사용자의 상세정보가 나온다

    hint : index를 잘 활용해보세요! 인덱스의 기본값은 0부터 시작
    let index = 0;
    const prev = () => {
        if()... return
        index--
    }
*/

/*
    자연어 풀이
    입력값 : 네명의 회원 정보 리스트 (객체 or 배열이 필요하다)
    출력값 : 특정한 순서의 사용자 상세 정보  -->  (나는 index를 활용할 것이라는 생각이 드는 것이 매우매우 중요하다)

    console.log(userList[index])  -->  이거를 먼저 생객해내지 못하면 이 문제는 절대 풀 수 없다
    // -> 출력값에 애초에 "순서" 라는 말이 들어가야한다 -> 그것이 변수로 지정해준 "index" 이다

    연산 : 이전함수와 이후함수가 존재하며, 이후 함수 호출하면 index(순서)가 1증가한다.
    단, 이후 함수는 최대 유저 목록의 수를 넘어갈 수 없다.

    이전함수는 순서가 -1씩 내려가고 0이하로 내려갈 수 없다.

    ==> "순서" 가 유추가 된다면 무조건, 반드시 "index" 를 활용하면 된다!!
    --> 자바스크립트에서 순서가 보장된 자료구조는 "배열" 밖에 없다
*/

const userList = [
    {
        name: "김사과", // 0
        age: 20,
        height: 190
    },
    {
        name: "이멜론", // 1
        age: 20,
        height: 190
    },
    {
        name: "오렌지", // 2
        age: 20,
        height: 190
    },
    {
        name: "박하나", // 3
        age: 20,
        height: 190
    }
]
let index = 0;
function next() {
    // if(index === userList.length) return;
    if(index >= userList.length) return;
    index++
}
// 
function prev() {
    if(index <= 0) return;
    index--
}
next()
next()
next()
next()
console.log(userList[index]) // 이멜론
