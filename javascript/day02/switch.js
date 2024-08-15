
// switch문 : 어떠한 조건이 무슨 "값" 이냐에 따라서 다른 결과값을 반환하는 친구이다

let month = 2;
// if는 "조건문"으로 분기를 설정했다면, switch는 "값"으로 분기를 설정한다
// 조건에 대한 분기가 많을 때, 그 분기가 값으로 이루어질 때는 switch문을 쓰는 게 좋다

// 전에 했던 "학점quiz" 같은 경우는 '몇점 이상이면' 이라는 조건문이 들어갔기 때문에 if문을 쓰는 것이 맞다

switch (month) {
    case 1:
        console.log("1월")
        break;
        // 탈출문, 해당 문장을 만나면 더이상 코드 블럭을 실행하지 않고 종료 (return 과 break 가 있다)
        //-> (이 코딩 블럭을 더이상 사용하지 않고 탈출하겠다는 의미)
        // switch 문은 조건이 맞으면, 조건이 맞은 것부터 이후까지 블럭 내에서 끝까지 실행해버리기 때문에, 탈출문은 필수 기재이다
    case 2:
        console.log("2월")  //  month의 값이 2이기 때문에 case2 와 값이 같아 실행된다
        break;  //  실행하고 밑에 case 들 까지 실행해버리기에, 그 전에 break로 종료해준다
    case 3:
        console.log("3월")
        break;
    default :
        //여기서 default 는 if문의 else (아무것도 아니면) 와 같다고 보면 된다
        console.log("잘못 입력하셨습니다")
}
console.log("안녕하세요")
/*
    콘솔로그 "안녕하세요" 는 switch문의 중괄호 밖에 있기 때문에,
    switch문 코드블럭 밖이기에 break 탈출문을 썼어도 실행되는 것을 볼 수 있다
*/
// 코드 블럭은 { 중괄호 } 라고 보면 된다

// switch 문은 어떨 때 쓰이냐면, 분기가 굉장히 많을 때 쓰인다 (but "조건식"이 들어가지 못한다 -> "값"이 들어간다)

// if문은 조건식이 들어가지만, switch문은 조건식이 들어가지 못한다 -> 값이 들어간다

// 분기가 굉장히 많을 때 가독성 비교를 해보자면 "삼항연산자" < "if문" < "switch문" 순으로 볼 수 있겠다
// -> 가독성이 좋은 것을 사용하면 된다 (팀과 회의를 해서 컨벤션을 정한다)