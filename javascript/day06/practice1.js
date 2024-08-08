
// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//--------------------------------------------------------
// reduce 예시

// const numArrPlus = numArr.reduce((num, n) => {return num + n}, 5)

// console.log(numArrPlus) // 60 (5 + 1 + 2 + 3 + ... + 10)


//--------------------------------------------------------
// 위에 것 for 문으로 변형

// let numArrPlus = 0;  //-->  0으로 했지만, 여기에 기본값을 주면 reduce 에 기본값을 주는 것과 같은 기능이다

// for(i=0; i < numArr.length; i++) {
//     numArrPlus = numArrPlus + numArr[i]
// }
// console.log(numArrPlus) // 55


//--------------------------------------------------------
// sort :

// const arr = [4, 2, 9, 10, 24, 90, 8, 40238, 6]
// const arr2 = arr.sort((a, b) => {return a - b})
// console.log(arr2)

// console.log(arr)  //--> 이렇게 원본 배열도 바뀐 것을 확인할 수 있다 (원본배열도 바꾸기에, 사용할 때 주의해야한다)


//--------------------------------------------------------
// Array 이거 잘 모르겠음 ==> Array fill 은 잘 되는데, Array from 은 쓰면 오류 뜸

// const arr_3 = Array().from({length: 6})
// console.log(arr_3)

//--------------------------------------------------------
// forEach :

// const arr = [10, 11, 12, 13, 14, 15]

// arr.forEach((el, i, ew) => {
//     console.log(el, i, ew)  //--> origin은 안쓰면 지우면 됨  // 여기서 origin 은 0, 1, 2, 3
// })

//--------------------------------------------------------
// for of :

// const arr = [0, 1, 2, 3, 30]

// for(let el of arr) {
//     console.log(el) // 0, 1, 2, 3
// }

// 요소의 "값" 만을 가지고 올 수 있음 (인덱스를 가지고 올 수 없음)
// 모든 요소를 순회해서 반복해야하는데, "값"만 필요하다 -> for of문

//--------------------------------------------------------
// for in :

// const 조영준 = {
//     age: 20,
//     height: 180,
//     rank: 60
// }
// for(let k in 조영준) {
//     console.log(k) // age  height  rank
//     console.log(조영준[k]) // 20  180  60
// }

//===> 반복문이기에, 위에있는 키값에 따라 총 3번 반복한다

//--------------------------------------------------------

// const junseok = {
//     age: 20,
//     height: 180,
//     rank: 60
// }
// console.log(Object.keys(junseok))  //  [ 'age', 'height', 'rank' ]
// console.log(Object.values(junseok))  //  [ 20, 180, 60 ]
// console.log(Object.entries(junseok)) //  [ [ 'age', 20 ], [ 'height', 180 ], [ 'rank', 60 ] ]

// for(let [key, value] of Object.entries(junseok)) {
//     console.log(key, value)
// }

//--------------------------------------------------------

// 자여연어 풀이가 필요할 것 같다

// const codeArr = (n) => {  //--> 매개변수로 전달받은 것 만큼 배열을 생성하겠다는 소리
//     return Array(n).fill().map((_, i) => (  //--> 이런식으로 요소가 필요하지 않을 때는 아래 하이픈 (_) 을 넣어주면 된다
//         {
//             id: i+1,
//             title: `title-${i+1}`,
//             content: `content-${i+1}`
//         }
//     ))
//     // 반환하는 타입이 객체일 때 return을 생략하려면 소괄호를 작성해줘야함
//     // 객체를 return할 때 return을 생략하려면 ()로 감싸줘야한다, 안그러면 코드 블럭으로 인식
// }
// console.log(codeArr(6))  //--> 콘솔로그에 찍어준 만큼 배열 안에 객체가 생긴다

// // const name = (매개변수) => {return Array(매개변수)... => ({ code... })}
// // console.log(name(매개변수))

// module.exports = {
//     codeArr
// }


// const codeArr = (n) => {
//     return Array(n).fill().map((_, i) => {
//         return {
//             id: i + 1,
//             title: `title-name`,
//             contents: `contents-${i + 1}`
//         }
//     })
// }
// console.log(codeArr(10))


