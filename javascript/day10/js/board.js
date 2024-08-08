
const generateMockPosts = (n) => Array(n).fill().map((_, i) => ({
    id: i+1,
    title: `title-${i+1}`,
    content: `content-${i+1}`
}))
// 코드 실행 블럭인 {}를 ()로 감싸주면 객체 블럭이 됩니다 -> return 생략 가능
// 내가 원하는 갯수 만큼의 mock post를 배열로 반환하는 함수

const mockPosts = generateMockPosts(2)
/*
    [
        {
            id: 1,
            title: "title-1",
            content: "content-1"
        },
        {
            id: 2,
            title: "title-2",
            content: "content-2"
        }
    ]
*/

const $boardList = document.querySelector('.board-list')
// 개발자 도구를 통해 여러분이 이 요소를 선택을 고려해야한다

const postsHtml = mockPosts.map((post) => `
    <article class="board-card">
        <h3 class="flex-center">${post.title}
        <button>삭제</button>
        </h3>
        <div class="flex-center">
        ${post.content}
        </div>
    </article>
`).join("")

$boardList.innerHTML = postsHtml
// map 을 통한 데이터 조회(화면에 그린다)는 addEventListener 사용이 어렵다
// 따라서 map을 통한 string을 innerHTML로 할 때는 클릭 이벤트가 없는 경우

// node를 통해 새로운 요소를 생성, 해당 요소에 eventListener를 사용
// 해당 요소를 boardList의 자식으로 append, insert 할 것이다

const $boardDetailTitle = document.querySelector('.board-detail > p')
const $boardDetailContent = document.querySelector('.board-detail > div')

for(const post of mockPosts) {
    const $postArticle = document.createElement('article')
    $postArticle.className = 'board-card'
    $postArticle.addEventListener('click', (event) => {
        const target = event.currentTarget
        // 버블링은 무조건 일어납니다. article의 자식을 클릭해도 article이 클릭된 것

        // event-target은 article이 아니어도 해당 타겟을 가지고 옵니다. button, h3
        // event-currentTarget은 실제로 이 이벤트가 발생한 요소, 해당 이벤트가 어디에서부터 생겼는지

        console.log(target) //-> 밑에 "이벤트 전파 방지"를 해서 콘솔이 안찍히는 것 확인 가능
        console.log(target.children)
        
        for(const child of target.children) {
            if(child.matches("h3")) {  //  css 선택자를 활용하여 현재 내가 찾고자하는 요소를 찾을 수 있다
                $boardDetailTitle.innerText = child.innerText
                continue
            }

            if(child.matches("div")) {
                $boardDetailContent.innerText = child.innerText
            }
        }
    })

    // <article></article>  -->  이렇게 비어있는 article이 생성된 것
    // string(x) -> document이다 -> addEventListener 가능하다
    const $postH3 = document.createElement('h3')
    $postH3.classList = 'flex-center'
    $postH3.textContent = post.title

    const $postDeleteBtn = document.createElement('button')
    $postDeleteBtn.textContent = '삭제'

    $postDeleteBtn.addEventListener('click', (event) => {
        event.stopPropagation() // 이벤트 전파 방지
        const target = event.target.parentNode.parentNode
        $boardList.removeChild(target)
        //-> 특정 요소를 자식에서 삭제하는 메서드 - removeChild
    })

    // dom 요소를 자식요소에 추가할 수 있는 방법
    // append, appendChild
    // 문자열(o) 노드(o), 문자열(x) 노드(o)  --> 노드를 사용하면 둘 중에 아무거나 사용ok
    // append(node1, node2, node3) -> append 는 여러 요소를 한번에 추가할 수 있다

    $postH3.appendChild($postDeleteBtn)
    // <h3 class = "flex-center"> <button>삭제</button> </h3>  -->  이런 상태

    const $postContent = document.createElement('div')
    $postContent.textContent = post.content
    $postContent.className = 'flex-center'

    $postArticle.append($postH3, $postContent)
    $boardList.appendChild($postArticle)
}

