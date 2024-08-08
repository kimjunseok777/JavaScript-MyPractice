/*
    4개의 회원 목록이 존재합니다.
    회원 목록에는 "김사과", "이멜론", "오렌지", "박하나"
    각 회원 상세에는 나이, 키, 이름이 정의되어있습니다 -> 나이, 키 맘대로 지정

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

const memberList = [
    {
        name: '김사과',
        age: 20,
        height: 180
    },
    {
        name: '이멜론',
        age: 20,
        height: 180
    },
    {
        name: '오렌지',
        age: 20,
        height: 180
    },
    {
        name: '박하나',
        age: 20,
        height: 180
    }
]

let index = 0;

function prev() {
    if(index <= 0) return
    index--
}
function next() {
    if(index >= memberList.length-1) return
    index++
}

next()
next()
prev()
prev()
prev()
prev()
next()
next()
next()
next()

console.log(memberList[index])