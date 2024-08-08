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
    공통출력 - 자판기가 가동되었습니다
    분기생성 - 잔돈 0원일 때 / 없는 메뉴 선택할 때 / 값이 더 적을 때 / 최소 금액보다 값이 더 적을 때
*/

let menu = {
    솔의눈: 300,
    비타500: 500,
    콜라: 1000
}
function 자판기(coin, product) {
    let price = menu[product]
    let charge = coin - price

    console.log(`자판기가 가동되었습니다`)

    if(!price) {return console.log(`존재하지 않는 상품입니다`)}
    if(coin < 300) {return console.log(`금액을 잘못 투입하셨습니다`)}
    if(coin < price) {return console.log(`금액이 부족합니다`)}
    if(charge === 0) {return console.log(product)}

    console.log(product, charge)
}
자판기(700, "비타500")
