
// 고차함수 "every, some, sort" 예시

// every , sort
const menus = [
    {
        title: "상품목록",
        isToggled: false
    },
    {
        title: "회원목록",
        isToggled: true
    },
    {
        title: "결제관리",
        isToggled: false
    }
]
const everyToggledMenus = menus.every((menu) => menu.isToggled) // false //-> 전부다 true가 아니기에 false 이다
console.log(everyToggledMenus) // false

const someToggledMenus = menus.some((menu) => menu.isToggled) // true //-> true가 하나 이상 있기에 true 이다
console.log(someToggledMenus) // true


//---------------------------------------------------------------------


// sort
const sortArr = [1, 2, 10, 4, 8]
sortArr.sort() // 1, 10, 2, 4, 8  //-> 2의 유니코드보다 10의 유니코드가 더 빠르기 때문에 먼저 배열된다

sortArr.sort((a, b) => a - b) // 1, 2, 4, 8, 10
                                                // 유니코드 - 모든 세계 언어를 코드로 기준한 일종의 국제 표준
                                                // 유니코드상에서 10이 2보다 앞에 있기 때문에, a-b는 숫자를 직접 이전과 이후를 비교해준 것 뿐

sortArr.sort().reverse().filter() // 반대  -->  "배열"이면 이렇게 체이닝으로 닷 으로 이어줄 수 있다
                                                        //--> 반환하는 값이 "배열"이 아니면 체이닝으로 더이상 이어줄 수 없다
// 체이닝
// 내장함수의 반환 값에 따라 데이터 타입에 따른 "내장 함수를 이어서 사용"하는 것

// sort는 반환하는 값도 배열이지만, 원본 배열도 바꾼다 (반환하면서 원본 배열도 바꾼다 -> 콘솔로그 찍어봐라)
