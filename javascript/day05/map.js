
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

// let postHtml = [];
// for(let i=0; i<posts.length; i++) {
//     postHtml.push(`<div>${posts[i].title}</div>`) //--> push : 원본 배열에 맨 끝 요소로 추가
// }
// // 이렇게 for 문으로도 밑에 배열을 만들어 줄 수 있다
// ["<div>안녕하세요-1</div>", "<div>안녕하세요-2</div>"]

// map 예시
// map을 쓴 순간 배열을 "순회"한다
let postHtml = posts.map((post) => {return `<div>${post.title}</div>`})
// 이런 식으로 위에 과정처럼 번거롭지 않고, 한줄만에 끝낼 수 있다
// 콜백함수를 쓴 것이다
console.log(postHtml)  // ["<div>안녕하세요-1</div>", "<div>안녕하세요-2</div>"]