
function generateMockPosts(n) {
    return Array(n).fill().map((_, i) => {
        return {
            id: i+1,
            title: `title-${i+1}`,
            content: `content-${i+1}`
        }
    })
}
const mockPosts = generateMockPosts(2)

const postHTML = mockPosts.map((post) => `
    <article class="board-card">
        <h3 class="flex-center">${post.title}
        <button>삭제</button>
        </h3>
        <div class="flex-center">
        ${post.content}
        </div>
    </article>
`).join("")

const $boardList = document.querySelector('.board-list')
$boardList.innerHTML = postHTML

//-------------------------------------------------------------------

const $boardDetailTitle = document.querySelector('.board-detail > p')
const $boardDetailContent = document.querySelector('.board-detail > div')

function renderPost(title, content) {
    // article
    const $postArticle = document.createElement('article')
    $postArticle.className = 'board-card'
    $postArticle.addEventListener('click', (event) => {
        const target = event.currentTarget
        for(const child of target.children) {
            if(child.matches('h3')) {
                $boardDetailTitle.textContent = child.childNodes[0].textContent
            }
            if(child.matches('div')) {
                $boardDetailContent.textContent = child.textContent
            }
        }
    })

    // h3
    const $postH3 = document.createElement('h3')
    $postH3.className = 'flex-center'
    $postH3.textContent = title

    // delete button
    const $postDeleteBtn = document.createElement('button')
    $postDeleteBtn.textContent = '삭제'
    $postDeleteBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        const target = event.currentTarget.parentNode.parentNode
        $boardList.removeChild(target)

    })
    // content
    const $postContent = document.createElement('div')
    $postContent.className = 'flex-center'
    $postContent.textContent = content

    // 자식으로 넣어주기
    $postH3.appendChild($postDeleteBtn)
    $postArticle.append($postH3, $postContent)
    $boardList.appendChild($postArticle)
}

//-------------------------------------------------------------------

for(const post of mockPosts) {
    renderPost(post.title, post.content)
}

//-------------------------------------------------------------------

// 제목 , 내용 , 작성버튼 요직 만들기

const $WriteBtn = document.querySelector('.write-btn') // 작성 버튼

$WriteBtn.addEventListener('click', () => {
    const $title = document.querySelector('.title')
    const $content = document.querySelector('.content')
    
    renderPost($title.value, $content.value)

    // 작성 후 칸 초기화
    $title.value = ""
    $content.value = ""
})