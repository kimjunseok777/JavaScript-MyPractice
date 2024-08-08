/* 
    로또 번호 맞추기
    랜덤 번호 생성 [1~45, 1~45, 1~45, 1~45, 1~45, 1~45, 1~45]
    길이가 7인 각 요소가 1~45중 랜덤한 숫자로 들어가는 번호 생성

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

    (심화 - 과제)
    하나의 구매가 천원이라 했을 때
    랜덤 생성된 번호를 통해 5등 당첨 되려면 얼마가 필요할지 계산 반복 
*/

//--------------------------------------------------------------------

function generateLottoNumber() {

    //  1~45까지의 랜덤 숫자를 생성
    //  랜덤 숫자가 담긴 배열의 길이가 6을 만족할 때까지 반복  //  중복 숫자가 들어가서는 안된다
    //  똑같은 번호가 배열에 포함되어 있을 때, 배열에 요소를 추가하지 않는다
    //  [1, 4, 8, 12, 25, 68, 32] -- 랜덤한 배열

    const lottoNumbers = [];
    // for(; lottoNumbers.length<7;)  //  이렇게 for 문으로도 풀 수 있음
    while(lottoNumbers.length<7) {
        const randomNumber = Math.floor(Math.random() * 45 + 1)  //  1~45
continue
        // if(lottoNumbers.includes(randomNumber)) continue;  //--> 이렇게 continue 로 풀어줘도 된다
        // lottoNumbers.push(randomNumber)

        if(!lottoNumbers.includes(randomNumber)) {
            lottoNumbers.push(randomNumber)
        }
    }
    return lottoNumbers
}

//--------------------------------------------------------------------

//  [1, 3, 4, 1, 43, 22, 12]
//  사용자가 찍은 번호
function lottery(userNumbers) {

    let winningCount = 0;
    const winningNumbers = generateLottoNumber()
    //  정답을 맞추는 로또함수는 랜덤 숫자 배열을 생성하는 함수에 관심이 없다
    //  단일 책임 원칙 (한가지의 함수는 하나의 일만 해야한다)  //  함수를 기능별로 분리해야할 필요가 있다

    const bonusNumber = winningNumbers.pop()  //  보너스 번호 (마지막 인덱스)

    //  유저가 작성한 번호가 정답 로또 번호에 포함되어있는지 검사
    for(const number of userNumbers) {
        if(winningNumbers.includes(number)) winningCount++;
    }

    let rank;
    //  맞춘 개수에 따라서 랭크를 다르게 반환할 수 있어야함
    switch(winningCount) {
        case 6:
            rank = 1;
            break;
        case 5:
            if(userNumbers.includes(bonusNumber)) {
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
        default :
            rank = "미당첨"
            break;
    }

    //  맞춤 개수, 보너스 번호를 구해야함 (마지막 인덱스)
    //  맞춤 개수 + 보너스 번호의 당첨 유무 (let winningCount, let bonusNumber)
    //  rank (let rank)

    // 아래에서부터 위로 올라가는 문제 형태이다
}