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

//------------------------------------------------------------------
// 랜덤 번호 생성 배열 : 로또 번호

function randomNum() {
    let lottoArr = []
    while(lottoArr.length < 7) {
        const random = Math.floor(Math.random()*45+1)

        if(!lottoArr.includes(random)) {
            lottoArr.push(random)
        }
    }
    return lottoArr
}

//------------------------------------------------------------------
// 사용자 입력 번호와 로또 번호 비교후, 일치하는 정도에 따라 rank 등급 매겨주기

function rankNum(userNum) {
    const lottoNum = randomNum()
    const bonusNum = lottoNum.pop()
    let winNum = 0;

    for(let num of lottoNum) {
        if(userNum.includes(num)) winNum++
    }

    let rank;
    switch(winNum) {
        case 6:
            rank = 1
            break
        case 5:
            if(userNum.includes(bonusNum)) {
                rank = 2
            } else {
                rank = 3
            }
            break
        case 4:
            rank = 4
            break
        case 3:
            rank = 5
            break
        default:
            rank = "꽝입니다"
            break
    }
    return rank
}

//------------------------------------------------------------------

let winRank = rankNum([1, 2, 3, 4, 5, 6, 7])
let payment = 0;

// winRank가 5이하가 나올 때까지 반복해야함
//--> 5이하가 나오면 조건이 false가 떠야함
while(winRank > 5 || winRank == "꽝입니다") {
    winRank = rankNum([1, 2, 3, 4, 5, 6, 7])
    payment = payment+=1000
}
console.log(payment)

// 정답이야 !!!  -->  논리합 연산자 (n개중 하나라도 true면 true) 를 사용하니 풀린다
// ... quiz-me3 이 더 정확한 정답이다...