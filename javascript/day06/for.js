
// 일반 for 문 :
// 이터러블하지 않을 때 사용 가능 (이터러블 : 순회 가능하다)
// 증감식 컨트롤
const arr = [0, 1, 2, 3]

for(let i=0; i<arr.length; i+=2) {
    console.log(arr[i]) // 0, 2
}

//-----------------------------------------

// forEach :
// i 는 index 를 의미
// forEach는 모든 요소를 순회, 조기 종료 가능 --> return;
arr.forEach((el, i, origin) => {
    console.log(el, i ,origin)  //--> origin은 안쓰면 지우면 됨  //--> 여기서 origin 은 arr의 원본 배열인 [0, 1, 2, 3]
})
// ==> el(요소)의 개수만큼 i(index)가 순회한다, origin을 적어주면 원본 배열까지 같이 순회해서 나온다

//-----------------------------------------

// for of :
// 모든 요소를 순회, 인덱스 X - 인덱스를 확인할 수 없음, 값만을 가지고올 수 있음
for(let el of arr) {
    console.log(el) // 0, 1, 2, 3
}

//-----------------------------------------

// for in :
// "객체"의 "키"를 통해 값을 확인
const junseok = {
    age: 20,
    height: 180
}
for(let k in junseok) {
    console.log(k) // age, height
    console.log(junseok[k]) // 20, 180  //-> 이렇게 "키를 통해 값"에 접근하려면 대괄호 접근법을 사용해야함
}


//--------------------------------------------------------------------------------------------------------


// Object 에 빌트인 함수 (객체에 쓰인다)

Object.keys(junseok) // [age, height]  -->  이러면 "키"가 "배열" 로 온다
Object.values(junseok) // [20, 180]  -->  이러면 "값"이 "배열" 로 온다
Object.entries(junseok) // [[age, 20], [height, 180]]  -->  "배열" 안에 "배열" 이 온다
                                            //  [[age, 20], [key, value]]  -->  이렇게 첫번째 인덱스에는 "키", 두번째 인덱스에는 "값"이온다
// 객체를 배열화할 때 많이 쓰임
// 객체의 내장함수

// entrie : 전체의(형용사)

// 참고 - 다음주에함 (보기만 하셈)
// 구조분해할당
// [age, 20] --> let[key, value];  -->  이런 식으로 변수 선언 해줄 수 있다
// const[key, value] = ["age", 20]  -->  위와 같은 말
for(let [key, value] of Object.entries(junseok)) {
    console.log(key, value)
}