
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
//     }
// ]
// const findPost = posts.find((post) => post.id === 1)  // 객체를 통째로 가지고 온다 // id가 1인 객체를 가져오겠다
// findPost.isLiked = true

// console.log(findPost)
// console.log(posts) // 원본배열의 isLiked 도 true로 바뀐 것을 볼 수 있다

const ph = ["010", "1234", "1234"]

const phNew = ph.reduce((str, number, index) => {
    if(index === 1) return str += "-****"
    return str += "-" + number
})

console.log(phNew)