
const generateMockPosts = (n) => Array(n).fill().map((_, i) => ({
    id: i+1,
    title: `title-${i+1}`,
    content: `content-${i+1}`
}))
// id, title, content 가 각각 다른 값을 넣어주기위해 fill( ) 을 비워놓은 것이다,
// 그리고 이 친구를 map돌리고, 인덱스를 활용하여 내용물을 채워준 것
// 코드 실행블럭인 { } 를 ( ) 로 감싸주면 더 이상 "함수실행블럭" 이 아닌, "객체코드블럭" 이 된다
//--> 그러면 return 생략할 수 있다
/*
    위의 generateMockPosts 함수는 무엇을 하는 함수일까?
    --> 내가 원하는 갯수 만큼의 mock post를 "배열" 로 반환하는 함수
*/

const mockPosts = generateMockPosts(2)
/* 이러한 배열이 반환된다
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
// 이제 함수를 통해서 이 mockPosts를 html에 있었던 example에 그려 넣을 것이다
// .board-list 에 있는 article 요소가 추가되어야한다

const $boardList = document.querySelector('.board-list')
// 개발자도구를 확인해보면 article 요소의 부모가 .board-list 인 것을 확인할 수 있다
//-->  어떤 요소를 가져와야 내가 추가할 수 있을 건지에 대해 고민해봐야한다

// mockPosts 를 map 돌려서 "새로운(변형된) 배열" 로 만들어 준 것
const postsHTML = mockPosts.map((post) => `
    <article class="board-card">
        <h3 class="flex-center">${post.title}
        <button>삭제</button>
        </h3>
        <div class="flex-center">
        ${post.content}
        </div>
    </article>
`).join("")  //--> innerHTML 해주기 위해 "배열" 을 "문자열" 로 바꿔준 것이다

$boardList.innerHTML = postsHTML  //--> postsHTML 을 스트링으로 바꿔줬기에 가능하다
//-->  innerHTML 은 "string" 만 쓸 수 있다

/*
    string에는 addEventListener 를 사용할 수 없다
    map을 통한 데이터 조회 (화면에 그리는 것) 는 addEventListener 사용이 어렵다
    따라서, map을 통한 string을 innerHTML로 할 때는 이벤트가 없는 경우에 하는 것이 좋다
    --> 그래서 위에 있는 코드는 아쉽게도 사용을 할 수가 없다

    --> 그래서 이제부턴 node 를 통해 새로운 요소를 생성하고,
            해당 요소에 eventListener 를 사용하고, boardList의 자식으로 append 할 것이다

            --> node 를 통해 아예 dom 을 생성할 거라는 얘기
            --> dom 을 생성해서 addEventListener 부착한 상태에서 추가시킬 거란 얘기이다

    이제 밑에 코드들을 봐보면서 addEventListener 넣어주는 코드들로 변형하는 과정들을 익혀보자
*/

//-------------------------------------------------------------------------------------------

const $boardDetailTitle = document.querySelector('.board-detail > p')
const $boardDetailContent = document.querySelector('.board-detail > div')

// 기능을 함수로 만들어 준 것
function renderPost(title, content) {
    const $postArticle = document.createElement('article')
    $postArticle.className = 'board-card'
    $postArticle.addEventListener('click', (event) => {
        const target = event.currentTarget
        for(const child of target.children) {
            if(child.matches('h3')) {
                $boardDetailTitle.innerText = child.childNodes[0].textContent
                continue
            }
            if(child.matches('div')) {
                $boardDetailContent.innerText = child.innerText
            }
        }
    })

    const $postH3 = document.createElement('h3')
    $postH3.className = 'flex-center'
    $postH3.textContent = title

    const $postDeleteBtn = document.createElement('button')
    $postDeleteBtn.textContent = '삭제'
    $postDeleteBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        const target = event.target.parentNode.parentNode
        $boardList.removeChild(target)
    })

    const $postContent = document.createElement('div')
    $postContent.className = 'flex-center'
    $postContent.textContent = content

    $postH3.appendChild($postDeleteBtn)
    $postArticle.append($postH3, $postContent)
    $boardList.appendChild($postArticle)
}

//----------------------------------------------------------

// node 를 생성해주는 것 :
// textContent 넣어주기 위해 for of 로 순회시켜준 것
for(const post of mockPosts) {
    renderPost(post.title, post.content)
}

//----------------------------------------------------------------------------------

/*
    과제 :
        추가 요직 만들기 (작성)
        append, appendChild  -->  article  (output)
        input의 사용자 입력값을 가지고 와야한다  (input)
        추가 버튼을 누르면 (button)
*/

// 작성 버튼
const $writeBtn = document.querySelector('.write-btn')
$writeBtn.addEventListener('click', () => {
    const $title = document.querySelector('.title')
    const $content = document.querySelector('.content')

    renderPost($title.value, $content.value)
    //--> 실무 때는 백엔드에 요청하는 코드가 들어와야한다

    /*
        만약에 실무라고 생각을 한다면 2가지 방법이 있다
        추가 요정을 하면 --> 백엔드에 요청을 하게 된다 (title, content 내놔) --> 데이터베이스 서버에 저장

        1. 낙관적 업데이트 --> 사용자가 불편을 겪지 않도록 백엔드에서 응답이 오기 전에 프론트에서
            화면을 미리 보여주는 것 --> 이때는 renderPost 가 필요 (대표적 예시로 카카오톡 채팅, 인스타 좋아요)
            --> 단점은 데이터가 정확하지 않아 후처리가 필요파다 (카톡 전송 안됐을 때 x 표시 뜨는 거)

        2. 요청 후 응답이 도착하면 화면을 다시 그립니다 (조회) -> renderPost 가 필요없습니다
            post 3개 -> post 1개 추가 요청(백엔드) -> db저장 -> 백엔드에게 다시 post요청 -> post 4개
            --> 단점은 느립니다 -> 백엔드가 완전히 요청이 종료되어야 화면을 그리기 때문에 느리다
    */

    // 작성을 했으면 칸이 초기화가 되어야함
    //--> renderPost 함수가 실행되고, title 과 content 의 input 칸을 비워준 것
    $title.value = ''
    $content.value = ''


    //----------------------------------------------------------------------------------------------


    /*
        *** 과제 수정 힌트 :      
        클릭된 값이 없다면 포스트를 선택해주세요 -> 전역변수로 만들어주면 된다

        위의 함수에서는 상세보기에서 클릭했을 때 matches 를 활용하여 바로 innerText로 넣었다
        --> 이제 수정을 하려면 이 친구를 변수에다 담아줘서 사용하면 된다 (전역변수로 담아주면 될 거다)

        수정 버튼을 클릭했을 때 이벤트를 발생시켜야함
            -> 지금 적혀있는 title, content 부분을 input 으로 대체해도 되고,
                모달로 띄워도 되고, 아래 수정창 하나 새로 만들어도 됩니다~
                
                input의 value를 이용해서
                id를 이용하여 내가 수정해야하는 post 찾기 --> post의 title, content의 text를 변경
                attribute (dom 요소에 속성 부여)
                    원하는 속성을 dom 요소에 부여하고 가져올 수 있다
                const $div = document....
                $div.setAttribute("data-role", 3) --> data-role 이라는 키로 3이라는 값의 속성을 부여한다
                $div.getAttribute("data-role") // 3  -->  post id 를 원하는 이름으로 설정해서 가져오기

            -> 구글링 "html 요소 다른요소로 변경"
        정의를 통해 내가 마지막으로 구현해야하는 코드를 먼저 산출
    */
})