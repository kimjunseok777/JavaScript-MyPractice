
/*
    변수 (variable) - 변하는 값  -->  let
    상수 (constant) - 변하지 않는 값  -->  const

    숫자가 원래 3이었어, 여기에 숫자 2를 더하면 값이 5 (3이 5로 바꼈으니 " 변수 " 라 한다)
    연산된 결과의 값을 어떤 공간에 저장하고 이름을 지어준 후 언제든 재사용

    어떠한 연산 값을 컴퓨터가 기억하게 함 -->  (전역변수, 지역변수가 있다)
    그 다음 해당 값이 필요할 때 언제든 재사용 할 수 있게 하는 것 (개발자의 편의성을 위해서 값을 저장해 놓는 것)

    console.log(3)
    console.log(3+2)
    console.log(3+2+2)

    위에 것들을 변수를 쓰면 ->
        let a = 3;
        console.log(a)  //  3
        a = 3 + 2;
        console.log(a)  //  5
        a = a + 2; 하면 a 의 값은 7이 된다 (계속해서 바뀔 수 있음)
        console.log(a)  //  7

        내가 원하는 값을 컴퓨터한테 기억시켜놓고 재사용할 때 다시 쓰고 싶어  ->  이때 쓰는 것이 변수이다
        (개발자들 편리하라고 쓰는 것이 변수)

        ==> 변수 / 상수는 재사용을 위해 컴퓨터에게 값을 기억시키는 것이다.  ->  "콜스택" 에 저장된다

        콜스택  /  WebAPI  /  콜백큐  -->  저장되고, 실행되는 것은 "비동기" 냐, "동기" 냐에 따라서 달라진다

        변수는 (let)
        변수는 let a = 5;
        a = 5 + 7; 이 가능하다  ->  a = 12 가 된다
        -> 변수는 값이 변할 수 있다, 변할 수 있다는 것은 좋은 것이다.

        하지만 상수는 (const)
        const b = 3;
        b = 7 (x - 에러가 난다); ==> 항상 같아야만하는 값을 지정해줄 때 "상수" 를 써야한다
        -> const는 한번만 쓸 때 많이 쓴다. 재할당 같은 것들 필요 없을 때
        -> const는 정해져있는 값이다.
            변하지 않을 때, 변해서는 안될 때 사용한다, 이 외에는 거의 "변수(let)" 사용
        -> const는 "상수" / let 으로 시작하는 것은 "변수"
*/

let a = 5;
console.log(a) // 5
// 코드는 항상 위에서 아래로 읽기 때문에 여기서 a 는 5이다
// let --> 선언부 ( let 은 선언할 때 앞에 '처음' 만 필요하다 )
// 내가 이 변수를 처음으로 컴퓨터에게 기억시켰다고 선언

a = 7;
// "선언" 이라는 것은 처음만 필요하기 때문에, 여기서는 let 을 쓰지 않고 바로 a를 쓴다
// a는 변수이기 때문에 이렇게 값을 7로 "재선언" 하는 것이 가능하다
// 이렇게 값을 바꾸는 과정을 "초기화" 혹은 "재할당" 이라 한다
console.log(a) // 7
// 여기서 a 는 7이다

// -> 터미널에서 경로를 이 패키지로 이동해준 뒤에 " node 파일명 " 입력해주면 값 확인 가능 
// (console.log 찍은 거 실행)