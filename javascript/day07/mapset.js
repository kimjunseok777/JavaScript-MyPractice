
// Map :

// 그냥 new Map() 으로 해주고, 나중에 "변수명.set" 으로 추가해줘도 되지만, 밑에 처럼 이렇게 "4차원 배열"로 기본값을 설정해줄 수도 있다
const errors = new Map([
    [404, "Not Found"],  //  페이지를 찾을 수 없다
    [400, "Bad Request"],  //  요청을 잘못했다 (client가 잘못한 에러)
    [401, "UnAuthorized"],  //  인증되지 않은 회원이다 (로그인 X 상태인데, 로그인 되어있는 사람들의 기능에 접근하려할 때 뜨는 에러)
    [403, "Forbidden"]  //  이 페이지에 접근할 권한이 없다
])
// http response status code (응답 상태 코드)
// 백엔드 서버에서 프론트엔드 요청에 따라 응답을 전달할 때 함께 전달하는 코드
// 200번대는 보통 성공  --> ex) 로그인 성공
// 400번대는 보통 실패 --> (client가 잘못 입력한 경우가 대부분)
// 500번대 실패 --> sever 문제 (backend 잘못이 대부분)

errors.set(500, 'Network Error')  //--> 500번에 'Network Error'를 넣을 거야 --> 이렇게 디폴트 값을 넣을 수 있다
const a = errors.get(400)
console.log(a)  //  Bad Request

for(let error of errors) {
    console.log(error)  //  [400, "Bad Request"] ~ [403, "Forbidden"] --> 배열이 나온다
    console.log(error[0])  //  400 ~ 403
    console.log(error[1])  //  Not Found ~ Forbidden
    // --> 순회하기 때문에 콘솔 찍은 차례대로 반복한다
}

let object = {}  //--> 이렇게 기존에 있는 객체를 Map으로 전환하려면 어떻게 해야할까?
let map = new Map(Object.entries(object))  //  "객체 -> 맵"  //-->  객체를 entries 해주면 "배열" 안에 "배열" 이 온다 (그래서 Map의 기본값으로 설정해줄 수 있는 것)

// Object.entries(변수명)  -->  key 와 value 를 배열로 바꿔준다 ("배열" 안에 "배열" 이 오는 형태로 바뀐다)
// Object.keys  -->  key가 배열로 온다
// Object.values  -->  value가 배열로 온다

Object.fromEntries(map)  //  "맵 -> 객체"

// Object.fromEntries  -->  배열을 객체로 바꿔준다

// 맵과 객체는 사용법이 비슷하다 -> 그래서 맵을 객체로, 객체를 맵으로 바꿀 수 있다
// 맵이 너무 어렵다면, 일단은 객체만 써도 괜찮다


//---------------------------------------------------------------------------------------------

// Set :

const arr = ["arr", "arr", "arr", "set", "set", "map"]

// 배열 -> set :
const set = new Set(arr)  //-> 이렇게 Set으로 바뀌면 중복된 데이터가 사라진다 (배열 -> Set)  //  Set은 유사배열 "객체"
console.log(set)  //  {"arr", "set", "map"} => 객체  (중복된 데이터가 사라진 것을 확인할 수 있다, 중복된 데이터를 제거할 수 있다) 

// set -> 배열 :
const setArr = Array.from(set)  //  (Set -> 배열)
console.log(setArr)  //  ["arr", "set", "map"] => 배열 (이런 식으로 Set 을 돌려서 중복 데이터 제거 후, Array.from으로 다시 배열로 바꿔주면 된다)

// set -> 배열 : Array.from 보다 배열로 바꾸는데 더 쉬운 방법 --> "전개연산자"
const spreadSet = [...set]  //  전개연사자를 활용한 배열 전환법 (아직 몰라도 됨)

// ==> 중복된 데이터를 제거하고 싶을 때 set 사용
// ==> 데이터 정보가 너무 많을 때, 특정 값을 찾고 싶으면 set으로 변환하고 찾는 것이다

// ex) const arr = [1~3000 데이터]
// 여기서 숫자 3이 있는지 찾으시오 arr.includes(3) --> 이러면 3이 3000번에 있으면 3000번을 순회함;;
// "new Set(arr)" 하고 "set.has(3)" 하면 암호화된 값(해쉬한 값)을 찾기 때문에 몇배는 더 빠르다  -->  true / false 로 답이 나온다
// ex) ~~만한 길이에있는 객체들을 보고 찾는 것보다, 암호화 값이 있는 객체를 보는 것이 훨씬 유리하다

// 데이터의 값이 많은데 특정한 값이 있는지 확인해야한다면 Set으로 확인하는 것이 가장 좋음
// 해쉬한 값으로 비교하는 해쉬 테이블 자료구조이기 때문 (해쉬 = 암호화) (자료구조 = 객체)