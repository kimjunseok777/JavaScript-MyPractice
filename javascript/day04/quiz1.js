/*
    자판기라는 함수를 정의

    1. 자판기가 처음 실행되었을 때는 "자판기가 가동되었습니다" 출력
    2. 잔돈이 0원이면 음료수 명을 출력
    3. 잔돈이 있으면 잔돈과 함께 음료수 명을 출력
    4. 없는 메뉴를 선택하면 "존재하지 않는 상품입니다" 출력
    5. 만약 투입 금액이 선택한 음료수 값보다 적을 경우 "금액이 부족합니다" 출력
    6. 최소 금액보다 적은 금액을 투입했을 때는 "금액을 잘못 투입하셨습니다" 출력

    함수의 입력 값은 금액(coin), 상품명(product)로 한다

    메뉴
    솔의눈 300원
    비타500 500원
    콜라 1000원

    *메뉴에 띄어쓰기 없음*
    객체에서 없는 키 값을 선택하면 undefined가 나옵니다
*/

/* 
    자판기라는 함수를 생성 -> 들어오는 input 값은 "금액" "상품명"이 매개변수로 전달
    ==> (사용자가 얼마 넣고 어떤 상품 뽑느냐에 따라 달라지기 때문)
    "잔돈" 과 "선택한 상품" 의 금액에 따라 분기가 생성

    *******-------
    const charge = coin - {price}
    const price = 선택한 상품 (유저가 선택 -- input)
                            = 준비된 메뉴에서 유저가 선택한 메뉴의 "가격" 을 불러오면 됨
    *******-------

    객체는 = 테이터의 집단에서, 특정한 키 값이 있는지 확인하고
                    해당 키값의 value 값을 가지고 오기 위해서 가장 많이 사용

    const menu = {
        솔의눈: 300,
        비타500: 500,
        콜라: 1000
    }
    product = 솔의눈
    menu[product] = 300  //  --> "객체" 를 사용하면 이런 식으로 키값을 불러올 수 있다

    const price = menu[product]  //  유저가 선택한 메뉴의 가격

    ***** 출력을 구체화하는 과정 *****
    공통 :
        console.log("자판기가 가동되었습니다")

    실패 : (return) //--> 성공의 윗 단에 적어줘야한다 --> 일종의 거름망 역할을 한다
        console.log("존재하지 않는 상품입니다") -> if(!price)
        ! (느낌표) 가 들어가면 값이 없으면 false 이다
        console.log("금액을 잘못 투입하셨습니다") -> if(coin < 300)
        console.log("금액이 부족합니다") -> if(coin < price)

    성공 :
        console.log(product) -> if(charge === 0), if(price === coin)
        console.log(product, charge) -> else
*/

const menu = {
    솔의눈: 300,
    비타500: 500,
    콜라: 1000
}
function 자판기(coin, product) {
    const price = menu[product]
    const charge = coin - price

    console.log("자판기가 가동되었습니다")

    if(!price) { return console.log("존재하지 않는 상품입니다") }
    if(coin < price) return console.log("금액이 부족합니다")
    if(coin < 300) return console.log("금액을 잘못 투입하셨습니다")
    // if 문 뒤어 코드 블럭이 1줄이면 { } 생략 가능
    // early return --> else if는 가독성이 좋지 않음
    // 실패한 경우(예외사항) 빠른 함수 탈출문으로 분기처리를 쉽게 하는데 도움을 줌
    // -> 이걸 쓰면 else if 를 쓰지 않아도 됨

    if(charge === 0) { return console.log(product) }
    console.log(product, charge) //-> 위 4가지 경우의 수를 제외하고 이 친구가 나와야하기 때문에 else 적을 필요 없음
    // -> 위에서 이미 거름망 역할을 해주고 있음 --> 그래서 "저거 아니면 이거" 가 된다
}

자판기 (8000, "솔의눈")

// 내가 어느 순간에 객체라고 하는 데이터타입을 써야하는지 알아야한다