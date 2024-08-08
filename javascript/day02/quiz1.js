/*
    수학, 국어, 영어, 탐구영역이 있습니다.
    이 네가지 과목의 평균에 따라
    90점 이상이면 A학점
    80점 이상이면 B학점
    70점 이상이면 C학점
    그 외 모두 F 학점

    "ooo님의 이번 학기 성적은 o학점 입니다" 출력
*/
// 터미널에서 출력할 때는 node 파일명

// 입력 -> 평균점수
    // -> 평균 점수를 구하려면 네 과목의 합 / 4

// 출력 -> 학점이 포함된 메세지를 출력해야한다
    // -> console.log(`${name}의 이번 학기 성적은 ${grade}입니다`) --> name , grade
    // -> 즉, 내가 필요한 것은 네 과목의 합 평균 , name , grade 이다
    // -> 추상적인 목표 (자연어로 만들어진 것) 를 구체화 시켜야한다!

// 연산 -> 평균 점수에 따라서 분기가 생성되어 학점이 달라진다

let name = "김준석"
let grade;  //  grade 를 undefined 로 놔둔 것
let 수학, 국어, 영어, 탐구;
수학 = 90;
국어 = 70;
영어 = 100;
탐구 = 60;
// '매직넘버' (어떠한 값이든 될 수 있는 넘버) 가 아닌 이런식으로 변수로 이름을 정해 놓는 것이 정말 중요하다

let avg = (수학 + 국어 + 영어 + 탐구) / 4;

if(avg >= 90) {
    grade = "A"
} else if (avg >= 80) {
    grade = "B"
} else if (avg >= 70) {
    grade = "C"
} else {
    grade = "F"
}

console.log(`${name}님의 이번 학기 성적은 ${grade}학점 입니다.`)

// 변수라는 것을 사용하면, 귀찮게 써야 되는 것들을 해결할 수 있다는 것을 알 수 있다