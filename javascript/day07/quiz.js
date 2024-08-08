
/* 
    로또 번호 맞추기
    랜덤 번호 생성 [1~45, 1~45, 1~45, 1~45, 1~45, 1~45, 1~45]
    길이가 7인 각 요소가 1~45중 랜덤한 숫자로 들어가는 번호 생성

    ----------------------------------------------------------------

    번호 당첨 기준 (switch, flag(분기), 마지막 인덱스를 따로 빼는 작업)
    로또 번호 3개 -> 5등
    로또 번호 4개 -> 4등
    로또 번호 5개 -> 3등
    로또 번호 5개 + 보너스(마지막숫자) -> 2등
    로또 번호 6개(마지막번호 제외) -> 1등

    ----------------------------------------------------------------

    input
    [구매한 번호]
    [1, 4, 8, 12, 25, 68, 32]

    operate
    [랜덤 생성된 번호] -- 정답
    맞는지 확인

    output
    등수, 꽝

    (심화 - 과제)
    하나의 구매가 천원이라 했을 때
    랜덤 생성된 번호를 통해 5등 당첨 되려면 얼마가 필요할지 계산 반복 
*/

function lottery() {
    let lottoArr = []

    while(lottoArr.length<7) {
        let randomNum = Math.floor(Math.random()*45+1)
        if(lottoArr.includes(randomNum)) continue
        lottoArr.push(randomNum)
    }
    return lottoArr
}

//-----------------------------------------------------------

function winFlag(userNum) {
    let winCount = 0;
    const winNum = lottery()
    const bonus = winNum.pop()

    for(let n of userNum) {
        if(winNum.includes(n)) winCount++
    }

    let rank;
    switch(winCount) {
        case 6:
            rank = 1;
            break;
        case 5:
            if(userNum.includes(bonus)) {
                rank = 2;
            } else {
                rank = 3;
            }
            break;
        case 4:
            rank = 4;
            break;
        case 3:
            rank = 5;
            break;
        default:
            rank = '꽝입니다'
            break;
    }
    return rank
}

// winFlag([1, 2, 3, 4, 5, 6, 7])

//-----------------------------------------------------------

let payment = 0;
let rankNum = winFlag([1, 2, 3, 4, 5, 6, 7])
console.log(rankNum)

while(rankNum <= 5) {
    //-> rankNum가 5가 아닐 때까지 반복  //--> while(rankNum == 5) 이거는 rankNum가 5일 때 반복하는 것 (while문은 조건이 true일 때 반복한다)
    rankNum = winFlag([1, 2, 3, 4, 5, 6, 7])
    //-> 재실행을 계속 시켜줘야해서 안에서 재할당 해주는 것도 반복해야함
    payment = payment += 1000
}

console.log(payment)

/*
    winFlag 를 반복 실행시켜주는 반복문 -> 반복의 조건은 winFlag가 5가 나올 때까지
    payment 를 1000 씩 올려주는 반복문 -> 반복의 조건은 winFlag가 5가 나올 때까지
*/

// while(rankNum == 5) {
//     payment += 1000
// }
// console.log(payment)
