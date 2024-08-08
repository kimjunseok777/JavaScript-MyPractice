let b = {
    name: "김준석",
    age: 20
}
console.log(b) // name: '김준석', age: 20 --> 출력
b.height = 190
console.log(b) // name: '김준석', age: 20, height: 190 --> 출력
delete b.height
console.log(b) // name: '김준석', age: 20 --> 출력
b.age = 18
console.log(b) // name: '김준석', age: 18 --> 출력 --> 객체 안에 같은 키가 존재할 수 없다 --> 그래서 변형 됨
console.log(b.age) // 18 --> 출력
