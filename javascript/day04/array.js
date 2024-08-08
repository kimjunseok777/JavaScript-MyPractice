
const arr = []
console.log(arr[0]) // undefined
console.log(arr.length) // 0

arr[1] = 1;
arr[3] = 3; // 이러면 0호실, 2호실은 공실로 남아있다 ("갯수"가 아닌 "순서"가 중요하다) -> 즉 순서는 0~3까지 있는 것이다
// index는 항상 0부터 시작한다
// "순서가 중요한가" 생각해봐야함
// ----------- (index) 가 필요한지에 대한 여부 판단이 제일 중요
// ----------- 그리고 순회 여부 판단이 중요하다

console.log(arr) // empty 1 empty 3
console.log(arr.length) // 4 --> .length는 "갯수"를 알려준다

//--> 정리해보자면 배열은 인덱스(index)는 0부터 시작하고, 갯수(length)는 1부터 시작한다