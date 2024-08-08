
const junseok = {}
// 밑에 이런식으로 키값과 벨류를 추가해줄 수 있다
junseok.name = "김준석"
junseok["age"] = 20
junseok.height = 190
delete junseok.height

junseok //-> 닷 찍어보면 자동완성 되는 것을 확인할 수 있다 (좋은 기능이다 -> 개발할 때 정말 편리하다)
console.log(junseok)
// 반드시 공통된 주제로 묶어야하고
// const여도 데이터의 삭제 추가 가능

// junseok = {}  --> 이런 식으로 새로운 객체를 선언하는 것은 안된다 (x)
// junseok. / junseok[" "] --> 무조건 이런식으로만 사용