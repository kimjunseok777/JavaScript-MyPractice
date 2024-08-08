/*
// map 말고 반복문이나 push 같은 걸로 풀어보자
const numArr = [1, 2, 3, 4, 5] // 11, 12, 13, 14, 15 로 바꾸고 싶어

const filterArr1 = numArr.find((el) => {return el%2 == 0})
const filterArr2 = numArr.findIndex((el) => {return el%2 == 0})

// console.log(filterArr1) // 2
// console.log(filterArr2) // 1

const filterArr3 = numArr.filter((el) => {return el !== 3})  //-->  filter 로 특정 요소 제거하는 방법

console.log(filterArr3)
*/

//-----------------------------------------------------------------

// const posts = [
//     {
//         id: 1,
//         title: "title-1",
//         isLiked: false
//     },
//     {
//         id: 2,
//         title: "title-2",
//         isLiked: true
//     },
//     {
//         id: 3,
//         title: "title-3",
//         isLiked: true
//     },
//     {
//         id: 4,
//         title: "title-4",
//         isLiked: true
//     }
// ]

// const newPosts = posts.filter((el) => {return el["id"] >= 3})
// console.log(newPosts) //-> id 가 3이상이 객체들반 배열로 반환

// const findPost1 = posts.find((el) => {return el.id > 2})
// console.log(findPost1) // { id: 3, title: 'title-3', isLiked: true }

// const findPost2 = posts.findIndex((el) => {return el.id > 2})
// console.log(findPost2) // 2

// posts[findPost2].id = 300

// console.log(posts)

//-----------------------------------------------------------------

const posts = [
    {  // 인덱스 - 0
        id: 1,
        title: "안녕하세요-1"
    },
    {  // 인덱스 - 1
        id: 2,
        title: "안녕하세요-2"
    }
]
// ["<div>안녕하세요-1</div>", "<div>안녕하세요-2</div>"]  //--> 출력값은 이렇게 "새로운배열" 을 생성한 것
// 기존에 있는 배열을 활용하여 새로운 배열을 만들어야한다

//----------------------------------

const newPosts = posts.map((el) => {return `<div>${el.title}</div>`})
console.log(newPosts)

//----------------------------------

let postHTML = []
for(let i=0; i<2; i++) {
    postHTML.push(`<div>${posts[i].title}</div>`)
}
console.log(postHTML)