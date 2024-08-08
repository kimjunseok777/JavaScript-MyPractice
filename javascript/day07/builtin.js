
const date = new Date()  //  utc 타임을 갖고 있다 (9시간 빼면 원래 시간이랑 맞다)
console.log(date)
// getFullYear , getDate : 1부터 시작  //  getMonth , getDay : 0부터 시작
console.log(date.getFullYear())  //  2024 (년)
console.log(date.getMonth())  //  0~11 (월) --> 4월이면 3이 뜬다 (0이 1월이다)
console.log(date.getDate())  //  20 (일) --> 1부터 시작한다 (1이 1일이다)
console.log(date.getDay())  //  0~6 (요일) --> 0일요일 ~ 6토요일 (한주의 시작은 일요일) (일, 월, 화, 수, 목, 금, 토)

//  2024-04-20T12:53:16.856Z  -->  터미널에 이렇게 뜨는데, 이 친구를 이쁘게 바꿔줘야함
console.log(date.toISOString())  //  utc기준 문자열로 나온다  -->  맨 위 date 랑 똑같은데, 그냥 문자열로 나오는 것

console.log(date.toString())  //  현재 위치에 맞는 시간이 작성 됨  -->  toString 은 UTC 타임이 아니기에 주의해야한다
console.log(date.toLocaleString())  //  "날짜" , "시간" 변환해줌, 현재 위치에 맞게끔 시간을 변환해줌 (KST로 좀더 이쁘게)
console.log(date.toDateString())  //  시분초 제거해서 나옴  -->  위에 "toString" 에서 시분초 제거한 버전

// 같은 Date 타입이라면, 시간끼리의 연산도 가능하다 -> ex) 인스타그램 피드 게시 몇시간 전
// Date 외에 다른 라이브러리의 경우 이러한 diff를 계산하는 유틸 함수 제공
// 라이브러리