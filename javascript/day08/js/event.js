
const $textChangeBtn = document.querySelector(".text-change-btn")
const $colorChangeBtn = document.querySelector(".color-change-btn")
const $addClassBtn = document.querySelector(".add-class-btn")
const $textDiv = document.querySelector("#text")

// addEventListener가 콜백함수에 전달한 매개변수는 event
// clickEvent ->target -> <button>
function addClassOn(e) {
    e.target.classList.add('on')

    // e.target.classList.add('on')
    // 이벤트가 발생한 타겟에 직접적으로 접근하여
    // 해당 타겟에 가진 속성을 컨트롤
    // 이벤트가 발생한 타겟을 명확히 가지고 오기 위해 사용하는 매개변수

    // 대표적으로 쇼핑몰을 예시로 한다면
    // 상품 카드 태그가 가지고 있는 상품번호는 해당 태그의 속성
    // 해당 속성을 이용하여 주로를 이동시키는 것
}

// $textChangeBtn.addEventListener('click', changeText)
//--> dom요소.addEventListener(이벤트명 and 함수)
// 여기서 함수는 실행을 시켜주는 것이 있기에 (click은 버튼을 누르면 실행) 익명함수를 써도 됨
$textChangeBtn.addEventListener('click', () => {
    $textDiv.innerHTML = '<h1>반갑습니다요</h1>'
    // $textDiv.innerText = '<h1>반갑습니다요</h1>'
    // innerHTML은 요소를 같이 넣어서 적용시킬 수 있음
    // innerText 는 "태그(요소)"들은 적용되지 않음
})

$colorChangeBtn.addEventListener('click', () => {
    $textDiv.style.color = '#f00'  //--> 이 요소에, 스타일 속성에, 컬러를 바꾸겠다는 뜻
    console.log($textDiv.style.color)
})

// $addClassBtn.addEventListener('click', addClassOn)
$addClassBtn.addEventListener('click', () => {
    $textDiv.classList.add('on')
})


const $menuItems = document.querySelectorAll(".menu-item")
// querySelectorAll -> 복수 (3개)
console.log($menuItems)

$menuItems.forEach((menuItem) => {
// menu-item 3개에 이벤트를 등록하기 위한 순회(forEach)
    menuItem.addEventListener('click', (event) => {
        $menuItems.forEach((el) => {
            // on이라는 class를 가지고 있는 요소가 있다면 제거하기 위한 순회
            // 1, 2, 3버튼 다 on 제거해주는 과정
            if(el.classList.contains('on'))el.classList.remove('on')
        })
    // 내가 누른 이벤트 타겟에 on class를 추가한 것
    // 내가 누른 것만 on 해주는 과정
    event.target.classList.add('on')
    })
})

// 내가 주고 싶은 이벤트가 있는 요소가 복수 --> 순회
// 만약 특정 요소를 클릭했을 대 다른 요소가 가지고 있는 속성을 검사하여 제거 --> 순회
// 내가 클릭한 타겟에 클래스를 추가
// 순회 -> 이벤트 등록 -> 이벤트 함수 -> 요소를 순회 -> 클래스 제거 -> 타겟에 클래스 추가

