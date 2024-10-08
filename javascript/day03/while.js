
// while : 무한 루프를 돌려놓고 대기하고 있을 때 많이 쓰인다

let count = 0;
// ~동안에 반복한다
// 괄호 안에 있는 조건이 true면 반복한다  -->  for 문을 조건식만 적는 것과 같다
while(count < 3) { //-> count 가 3보다 작으면 반복한다
    console.log(count)  // 0,1,2 반복  -->  count 는 변수로 0으로 선언해줬다
                                    // count 다른 숫자나 문자를 넣어주면 0, 1, 2로 반복하는 것이 아닌, 넣어준 숫자나 문자로 조건 횟수만큼 반복한다
                                    // --> 이유는 count 를 변수로 선언해줬기 때문
    count++ // 단항 산술 연산자(후위연산자) -> 전위연산자로 써줘도 콘솔로그 찍은 이후니까 답은 같다
}

// ~listen 할 때 많이 사용, 어떠한 조건이 발생했는지
while(true) {
    break;  // 탈출문으로 반복 멈출 수 있다
}
//-->  그러면 while은 처음에 조건식으로 제한을 정할 수 있고, 또는 중괄호 안에 break로 제한을 정해줄 수 있는 것인가?

// while 문은 실무에서 잘 사용되지는 않는다 -> 정말 가끔 쓰임
// while 과 비슷한 for 반복문
//==> for(초기화식(변수선언); 조건식; 증감식)

/*
    while 문 :
        변수선언
        while(조건문) {
            콘솔로그()
            증감식 --> 조건문과 일치하면 무한반복하기에 반복의 제한을 넣어줄 수 있음
        }
*/