//--------------------------------------------------------------------------
// 4번 :

const $teInput = document.querySelector('#te_input')

$teInput.attributes[2].textContent = '10'
// 길이 제한을 10자로 바꿔준 것

function oninput(event) {
    const target = event.currentTarget.value

    if(!isNaN(target) && target !== '') {
        // 숫자를 적었을 때 알람창 띄우는 기능
        alert('숫자가 입력되었습니다')
        // 숫자를 입력했을 때, text 가 없어지는 기능
        $teInput.value = null
    }
}

$teInput.addEventListener('input', oninput)

//--------------------------------------------------------------------------
// 5번 :

/*
    자연어 풀이 :
    input에 적었던 값을 받아오는 함수를 제작하고,
    그 받아온 값을 list에 innerText로 적는 함수를 제작
*/

const $inputListData = document.querySelector('#list_data') // input 박스

const $sendBtn = document.querySelector('#send') // 저장 버튼
const $resetBtn = document.querySelector('#reset') // 초기화 버튼

const $sendList = document.querySelector('#list') // list 의 부모

// input 에 적었던 값 target 으로 받아오기
let target;
function dataInput(event) {
    return  target = event.currentTarget.value
}
$inputListData.addEventListener('input', dataInput)

// 저장 버튼 :
//--> 여기서 list 생성할 때 수정, 삭제 버튼을 붙여줘야 한다
function sendBtn() {
    $sendBtn.attributes[0].textContent = 'button'

    const $list = document.createElement('li')
    $list.className = 'liclass'
    $list.textContent = target
    $sendList.appendChild($list)

    //-------------------------------------------------------
    // 6번 :
        // 수정 버튼
        /*
            자연어 풀이 :
            수정 버튼을 클릭하면 input 박스가 생성되면서, 기존에 있던 text 를
            innerText로 가져오고, 변경한다음, 확인 or 수정 버튼을 누르면
            text 가 수정되는 요직을 만들어야한다
        */
        const $reviseBtn = document.createElement('button')
        $reviseBtn.textContent = '수정'
        $reviseBtn.type = 'button'
        $reviseBtn.addEventListener('click', () => {
            // input 박스 생성
            $list.innerHTML = `<input type="text" value="${$list.childNodes[0].textContent}"/> `
            // 수정완료 버튼 생성
            const $reviseCompleteBtn = document.createElement('button')
            $reviseCompleteBtn.type = 'button'
            $reviseCompleteBtn.textContent = '수정완료'
            // 수정 text 값 받아오기
            let reviseText;
            $list.addEventListener('input', (event) => {
                reviseText = event.target.value
            })
            // 수정 완료 버튼 클릭
            $reviseCompleteBtn.addEventListener('click', () => {
                $list.innerHTML = `<li class="liclass">${reviseText}</li>`
            })

            $list.appendChild($reviseCompleteBtn)
        })
        //-----------------------------------------------------
        // 삭제 버튼
        const $deleteBtn = document.createElement('button')
        $deleteBtn.textContent = '삭제'
        $deleteBtn.type = 'button'
        $deleteBtn.addEventListener('click', (event) => {
            const target = event.currentTarget.parentNode
            $sendList.removeChild(target)
        })
        $list.append($reviseBtn, $deleteBtn)
    //-------------------------------------------------------
}
$sendBtn.addEventListener('click', sendBtn)

// 초기화 버튼 :
function resetBtn() {
    $sendList.replaceChildren()
}
$resetBtn.addEventListener('click', resetBtn)


//--------------------------------------------------------------------------
// 6번 :
//--> 위에 5번에는 새로 작성한 list 에 수정, 삭제 버튼이 부착되는 것
//--> 밑의 수정, 삭제 버튼은 기존에 있는 list 2개에 부착된 버튼

/*
    자연어 풀이 :
    list 에 있는 목록들을 순회해서 수정, 삭제 버튼을 넣어주고,
    각각 addEventListener 함수를 넣어준다
*/

for(const child of $sendList.children) {
    // 기존 list의 수정 버튼
    const $reviseBtn = document.createElement('button')
    $reviseBtn.textContent = '수정'
    $reviseBtn.type = 'button'

    //-----------------------------------------------------

    // 기존 list의 삭제 버튼
    const $deleteBtn = document.createElement('button')
    $deleteBtn.textContent = '삭제'
    $deleteBtn.type = 'button'
    $deleteBtn.addEventListener('click', (event) => {
        const target = event.currentTarget.parentNode
        $sendList.removeChild(target)
    })

    child.append($reviseBtn, $deleteBtn)
}