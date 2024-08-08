

// 모듈 -> module.js 파일과 이어짐
const utill = require("./module") // {}  <-  객체가 utill에 담긴 것

// utill. 해보면 generateMockPosts 가 있는 것을 확인할 수 있다
const mockPosts = utill.generateMockPosts(10) // 모듈화된 파일의 export된 함수를 require하여 참조한 것
//==> 함수를 다른 파일에서 만들어서 참조했다
console.log(mockPosts) // { id: 0, title: 'title-1', content: 'content-1' } x 10

//-----------------------------------------------------------------------------------------------------


// 배열의 생성
const arr = [];
// 배열을 생성하는 방법 :
// 유사 배열 객체를 배열화하는 방법 (배열과 유사한 객체를 "유사배열객체" 라고 한다)
// 자바스크립트에서는 "원시값" (콜스택에 저장) 을 제외한 모든 값은 "객체" 이다 (참조타입 - 힙메모리에 주소값으로 저장)

//----------------------------------------------------------------------------------------------------

// ===> 잘 모르겠다

// 첫번째 방법
// Array().from()  //--> 배열을 생성하고 싶다면 Array from  //  "유사배열객체"를 "배열"로 바꿔준다
const obj = {  //  중괄호이기에 "객체" 이다
    0: 'a',
    1: 'b',
    length: 2  // 이렇게 객체인데, length 같은 배열에서만 있는 특성이 있으면, 이것을 "유사배열객체" 라고 한다
                        // 유사배열객체를 통해서 "배열"로 만들 수 있다
}
const arr_2 = Array().from({obj}) // [a, b] 인 배열이 나온다
const arr_3 = Array().from({length: 6}) // empty로 채워진 길이가 6인 배열이 나온다
const arr_4 = Array().from({length: 6}).map(() => 0) // [0, 0, 0, 0, 0, 0] 인 배열이 나온다

//----------------------------------------------------------------------------------------------------


// 두번째 방법
// Array 에 숫자를 넣는 방법
// Array(6).fill(0)  //--> 나는 아무 것도 없는 그냥 배열을 생성하려면 Array fill
const arr_5 = Array(6).fill(0) // [0, 0, 0, 0, 0, 0] 인 배열이 나온다


// Array from 과 Array fill

// Array from : 자바스크립트에는 유사배열객체들이 있다 (문자열, map ...)
                        // 이러한 유사배열객체들을 다시 배열로 만들고 싶을 때 사용한다
                        // 문자열을 배열로 바꾸는 것은 "split" 같은 내장함수를 사용해도 된다

// Array fill : 그냥 아무것도 없는 일반 배열을 만들고 싶을 때 사용한다 *** 많이 사용된다 ***

