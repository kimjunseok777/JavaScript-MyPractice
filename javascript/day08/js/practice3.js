
const $textDiv = document.querySelector('#text')

const $textChangeBtn = document.querySelector('.text-change-btn')
const $colorChangeBtn = document.querySelector('.color-change-btn')
const $addClassBtn = document.querySelector('.add-class-btn')

$textChangeBtn.addEventListener('click', () => {
    $textDiv.innerHTML = '<h1>안녕하십니까</h1>'
})

$colorChangeBtn.addEventListener('click', () => {
    $textDiv.style.color = '#f00'
})

$addClassBtn.addEventListener('click', () => {
    $textDiv.classList.add('on')
})

//--------------------------------------------------

const $menuItems = document.querySelectorAll('.menu-item')

$menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
        $menuItems.forEach((el) => {
            if(el.classList.contains('on')) el.classList.remove('on')
        })
    event.currentTarget.classList.add('on')
    })
})