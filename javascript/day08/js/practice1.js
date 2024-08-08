
const $textDiv = document.querySelector("#text")

const $textChangeBtn = document.querySelector(".text-change-btn")
const $colorChangeBtn = document.querySelector(".color-change-btn")
const $addClassBtn = document.querySelector(".add-class-btn")

// function addClassOn(target) {
//     target.classList.add('on')
// }

$textChangeBtn.addEventListener('click', () => {
    $textDiv.innerHTML = '<h1>반갑다 삼숙아</h1>'
})

$colorChangeBtn.addEventListener('click', () => {
    $textDiv.style.color = '#f00'
    console.log($textDiv.style.color)  //--> 콘솔창에서 확인할 수 있다
})

$addClassBtn.addEventListener('click', () => {
    // addClassOn($textDiv)
    $textDiv.classList.add('on')
})

//------------------------------------------------------------------------

const $menuItems = document.querySelectorAll('.menu-item')
// querySelectorAll -> 복수 (3개 다 가져옴)
console.log($menuItems)
//--> 이렇게 콘솔 찍어서 3개 다 제대로 왔는지 콘솔 창에서 확인해보기

$menuItems.forEach((menuItem) => {
// menu-item 3개에 이벤트를 등록하기 위한 순회
    menuItem.addEventListener('click', (event) => {
        $menuItems.forEach((el) => {
        // menu-item을 클릭했을 때
        // on이라는 class를 가지고 있는 요소가 있다면 제거하기 위한 순회
            if(el.classList.contains('on')) el.classList.remove('on')
        })
        // menu-item을 클릭했을 때
        // 내가 누른 이벤트 타겟에 "on" class를 추가한 것
        event.target.classList.add('on')
    })
})