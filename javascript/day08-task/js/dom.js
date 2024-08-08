
const $disp = document.querySelector('.disp > form > p')

window.onload = () => {
    $disp.innerHTML = '<h1>글씨 변경 완료</h1>'
    // innerHTML, innerText, textContent ... 등등 아무거나 써도 된다
}


//----------------------------------------------------------------


const $tabs = document.querySelectorAll('.tab')
// const $onTab = document.querySelectorAll('.tab.on')
// 이런 식으로 "tab 이면서 on 클래스" 를 가져올 수도 있다
const $blocks = document.querySelectorAll('.block')

$tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {

        //--------------------------------
        const target = event.currentTarget;
        // 내가 선택한 요소를 상수 선언
        const targetText = target.innerText;
        // 내가 선택한 요소의 text를 상수 선언
        //--------------------------------

        $tabs.forEach((tab) => {
            if(tab.classList.contains('tab_on')) tab.classList.remove('tab_on')
            //-> 색상을 변경하기 전에 "on" class가 있는 tab의 "on" class를 제거
        })
    event.currentTarget.classList.add('tab_on')
    // currentTarget : 내가 선택한 탭을 가지고 오기 위함
    // 조건 : 내가 선택한 탭만 배경과 글자색이 변해야한다

    // target, currentTarget -> 내가 실제로 클릭한 이벤트 타겟을 가지고 올 수 있다
    // "target" 을 사용하게 되면, 그 부모요소를 가지고 오는 경우가 있다
    // --> 그래서 "currentTarget "을 사용한 것 -> 내가 선택한 것 정확하게 가져온다


    //--------------------------------------------------------------------


    $blocks.forEach((block) => {
        // block 5개 순회
        if (block.innerText.includes(targetText)) {
            // innerText 는 "배열"이다
            // block 에 "내가 선택한 요소의 text"가 포함되어 있다면 ~
            block.style.display = 'block'
            // 만약에 있다면, text 포함되어 있는 block은 보여주겠다
        } else {
            block.style.display = 'none'
            // 아니라면(text 포함되어 있지 않다면), 블럭을 보여주지 않겠다
        }
        // 위치를 그대로 하고 싶다면, visible hidden 같은 것 사용해주면 된다
    })
    })
})


    // 1. style 요소를 사용하는 것 -> 단일 style을 바꿀 때
    // ex) 나는 배경 색만 바꿀거야...

    // 2. class를 추가하는 것 -> 다중 style을 바꿀 때
    // -> 어떠한 조건에 따라 style이 있어야할 때 (style을 초기화할 가능성이 있을 때)
    // ex) 내가 선택한 것에만 이 스타일이 있어야 해
//----------------------------------------------------------------

// 심화과제 :
/*
    function addClassList(){}
    function handleDisplayBlock(){}

    위에 2,3번 문제에 for each가 두가지 기능을 담고 있으니,
    이것을 함수로 기능을 쪼개서 사용하는 연습을 해보자
*/

/*
    ex)
    function addClassList(){
        const $onTab = document.querySelectorAll('.tab.on')
        if($onTab) $onTab.classList.remove('on')

        // 이거는 하나만 배열형태가 아닌, 하나만 제거하는 방법이다

        target.classList.add('on')
    }

    function handleDisplayBlock(){

    }
*/