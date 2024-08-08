
const $textDiv = document.querySelector('#text')

const $textChangeBtn = document.querySelector('.text-change-btn')
const $colorChangeBtn = document.querySelector('.color-change-btn')
const $addClassBtn = document.querySelector('.add-class-btn')

$textChangeBtn.addEventListener('click', () => {
    $textDiv.innerHTML = '<h1>반갑다 삼숙아</h1>'
})

$colorChangeBtn.addEventListener('click', () => {
    $textDiv.style.color = '#f00'
})

function addClassOn(target) {
    target.classList.add('on')
}

$addClassBtn.addEventListener('click', () => {
    // $textDiv.classList.add('on')
    addClassOn($textDiv)
})

//----------------------------------------------------------

const $menuItems = document.querySelectorAll('.menu-item')

// 전체 순회하면서 클릭 이벤트를 넣어줘야한다
// 클릭을 하면 전체 다 .on 을 제거해줘야한다
// 클릭을 한 것만 .on 을 넣어줘야한다

$menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
        $menuItems.forEach((el) => {
            if(el.classList.contains('on')) el.classList.remove('on')
        })
    event.target.classList.add('on')
        // 여기서 target 의 역할을 정확하게 모르겠다
        // target 을 빼고 event.classList.add('on') 이렇게 해주면 실행이 안되던데,
        // 이유를 정확히 모르겠다
    })
})