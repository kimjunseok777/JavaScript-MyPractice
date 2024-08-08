
//------------------------------ map ------------------------------

/*
const posts = [
    {
        id: 1,
        title: "안녕하세요-1"
    },
    {
        id: 2,
        title: "안녕하세요-2"
    },
    {
        id: 2,
        title: "안녕하세요-하하하"
    },
]

let postHtml = posts.map((post) => {return `<div>${post.title}</div>`})

console.log(postHtml)
*/


//------------------------------ filter ------------------------------


/*
const numArr = [1, 2, 3, 4, 5]

const evenArr = numArr.filter((num) => num % 2 === 0)
// const evenArr = numArr.filter((num) => {return num % 2 === 0}) //--> return 과 중괄호 넣어준 것 (한줄이기에 생략 가능)

console.log(evenArr)
*/


//------------------------------ find------------------------------



// find는 "배열반환" 이 아니라 "요소반환" 이다
const posts = [
    {
        id: 1,
        title: "title-1",
        isLiked: false
    },
    {
        id: 2,
        title: "title-2",
        isLiked: true
    }
]
// const findPost = posts.find((post) => post.id === 1)  // "객체"를 통째로 가지고 온다 // id가 1인 객체를 가져오겠다
// console.log(findPost)

// findPost.isLiked = true
// // 복사본 생성 x, 실제 원본 배열의 해당 요소를 가지고옴
// // 해당 요소가 바뀌면 "원본 배열"의 데이터 함께 수정

// console.log(findPost)

//------------------------------ findIndex (위 find와 이어짐)------------------------------

const findIndexPost = posts.findIndex((post) => post.id === 1) // 0  --> id 가 1인 친구의 index 값은 0이기 때문

console.log(findIndexPost) // 인덱스를 반환하기에 0 이 나온다

posts[findIndexPost].isLiked = true;

console.log(posts) // 보면 인덱스 0번째의 객체에서 isLiked가 true로 바뀌는 것을 볼 수 있다