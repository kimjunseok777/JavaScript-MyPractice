const arr = ["김준석", "짱구", "마이멜로디"]
console.log(arr)

// 만약 arr에 쿠로미가 없다면 쿠로미를 맨 끝 요소로 추가해라

if(arr.indexOf("쿠로미") < 0) arr.push("쿠로미"); // 쿠로미 추가가 됐음  --> index는 0부터 시작하기에, 0보다 작다는 것은 없다는 것
// 이것과 같은 식 :
// if(!arr.includes("쿠로미")) arr.push("쿠로미");
// if(arr.includes("쿠로미") == false) arr.push("쿠로미");
// if(arr.includes("쿠로미") == !true) arr.push("쿠로미");

console.log(arr.push("신형만"))
// 콘솔로그arr 이 아닌 콘솔로그arr.push(~)를 하면 추가된 "개수"가 나온다 -> 왜일까??????

console.log(arr) // 쿠로미, 신형만이 추가된 "배열"이 나온다

// return 의 정확한 개념을 모르겠다 --> 질문하기!!!!!!!!!!!!!!!!
