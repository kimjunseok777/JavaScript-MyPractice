

// map :
const numArr = [1, 2, 3, 4, 5] // 11, 12, 13, 14, 15 로 바꾸고 싶어
const newNumArr = numArr.map((num) => num + 10)
// 순회하면서 새로운 배열이 필요해  -->  "새로운 배열이 필요하다" 이 말이 중요하다 -> 이럴 때 map 사용


// filter :
const evenArr = numArr.filter((num) => num % 2 === 0) //-> num에 2로 나눈 몫이 0인 것만 반환을 하겠다
// 짝수만 가져오겠다는 소리 (특정한 조건을 만족하는 것 찾아오기)


// find :
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
const findPost = posts.find((post) => post.id === 1)  // 객체를 통째로 가지고 온다 // id가 1인 객체를 가져오겠다
findPost.isLiked = true
// 복사본 생성 x, 실제 원본 배열의 해당 요소를 가지고옴
// 해당 요소가 바뀌면 "원본 배열"의 데이터 함께 수정


// findIndex :
const findIndexPost = posts.findIndex((post) => post.id === 1) // 0  --> id 가 1인 친구의 index 값은 0이기 때문
posts[findIndexPost].isLiked = true; // posts의 0번째 index의 isLiked를 true로 바꾸겠다

// "find", "findIndex" 는 특정한 요소의 특정한 조건을 만족하는 "가장 빨리 발견된 요소"를 반환
// 해당 요소를 수정할 때 사용



// 특정한 배열에서 어떠한 "객체" 가 있는지 찾기 위해서 includes를 사용하면
// 같은 내용의 객체라고 하더라도 주소를 비교할 수 없기 때문에 false가 나옵니다
// 따라서 특정한 배열에서 조건을 만족하는 "객체" 를 찾기 위해서는 find, findIndex 같이 순회해야 한다
const arr = [{name: "김준석"}, {}]
arr.includes({name: "김준석"}) // --> false 가 나온다
// false가 나오는 이유는 주소가 (저장된 공간) 다르기 때문 --> 찾을 수 없다

// *** 즉, 배열에서 객체가 아닌 요소를 찾을 때는 includes나 indexOf 사용해도 되지만, 배열안에 객체를 찾을 때는 find나 findIndex를 사용해야한다