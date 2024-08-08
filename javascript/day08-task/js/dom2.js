
const $loadDisplay = document.querySelector('#display > form > p')

window.onload = () => {
    $loadDisplay.innerHTML = '<h1>로딩완료</h1>'
}

//----------------------------------------------------------

const $tabs = document.querySelectorAll('.tab')
const $blocks = document.querySelectorAll('.block')

$tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {

        //--------------------------
        const target = event.currentTarget
        const targetText = target.innerText
        //--------------------------

        $tabs.forEach((el) => {
            if(el.classList.contains('tab_on')) el.classList.remove('tab_on')
        })
    event.currentTarget.classList.add('tab_on')

    // 배열인지 아닌지 잘 생각해보자
    $blocks.forEach((block) => {
        if(block.innerText.includes(targetText)) {
            block.style.display = 'block'
        } else {
            block.style.display = 'none'
        }
    })
    })
})