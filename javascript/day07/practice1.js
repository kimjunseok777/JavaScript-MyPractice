

const errors = new Map([
    [404, "Not Found"],  //  페이지를 찾을 수 없다
    [400, "Bad Request"],  //  요청을 잘못했다 (client가 잘못한 에러)
    [401, "UnAuthorized"],  //  인증되지 않은 회원이다 (로그인 X 상태인데, 로그인 되어있는 사람들의 기능에 접근하려할 때 뜨는 에러)
    [403, "Forbidden"]  //  이 페이지에 접근할 권한이 없다
])

console.log(errors)

const arr2 = new Set(errors)

console.log(arr2)

// 이렇게 콘솔 찍어보면, map은 객체안에 요소들이 있는 형태이고, set은 객체 안에 배열이 있는 형태이다
// 왜일까???