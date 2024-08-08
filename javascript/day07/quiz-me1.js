/* 
    로또 번호 맞추기
    랜덤 번호 생성 [1~45, 1~45, 1~45, 1~45, 1~45, 1~45, 1~45]
    길이가 7인 각 요소가 1~45중 랜덤한 숫자로 들어가는 번호 생성

    function lottery(){
        let lottoArr = Math.random, 배열 생성 (from, fill, map / for, while, push)

        * 중복 번호가 있어서는 안됩니다 (인덱스0이 42면, 다른 인덱스는 42가 나오면 안된다)
        -->  분기가 있어야함
        if, includes, Set

        let lottoArr = []

        // 초기식이나 증감식 없이 특정 조건을 만족할 때까지 반복하는 것은 while문 쓰면 좋음
        while(lottoArr.length < 7){
            if(!lottoArr.includes(random)){
                lottoArr.push(random)
            }
        }
    }

    번호 당첨 기준 (switch, flag(분기), 마지막 인덱스를 따로 빼는 작업)
    로또 번호 3개 -> 5등
    로또 번호 4개 -> 4등
    로또 번호 5개 -> 3등
    로또 번호 5개 + 보너스(마지막숫자) -> 2등
    로또 번호 6개(마지막번호 제외) -> 1등

    input
    [구매한 번호]
    [1, 4, 8, 12, 25, 68, 32]

    operate
    [랜덤 생성된 번호] -- 정답
    맞는지 확인

    output
    등수, 꽝
*/

//--------------------------------------------------------------------
// 1. 랜덤번호 생성 함수

function lottoNum() {
    let lottoArr = [];

    while(lottoArr.length < 7) {
        let randomNum = Math.floor(Math.random()*45+1)
        if(lottoArr.includes(randomNum)) continue
        lottoArr.push(randomNum)
    }

    return lottoArr
}

//--------------------------------------------------------------------
// 2. 랜덤번호와 유저번호비교 후, rank 매기는 함수

function rankNum(userNum) {
    let winNum = lottoNum()
    let bonus = winNum.pop()

    let winCount = 0;

    for(let num of winNum) {
        if(userNum.includes(num)) winCount++
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
            rank = 5
            break;
        default:
            rank = "꽝입니다"
            break;
    }
    return rank
}

//--------------------------------------------------------------------
/*
    하나의 구매가 천원이라 했을 때
    랜덤 생성된 번호를 통해 5등 당첨 되려면 얼마가 필요할지 계산 반복 
*/

let payment = 0;
let ranking = rankNum([1, 2, 3, 4, 5, 6, 7])

while(ranking != 5) {
    ranking = rankNum([1, 2, 3, 4, 5, 6, 7])
    payment += 1000
}

console.log(payment)




