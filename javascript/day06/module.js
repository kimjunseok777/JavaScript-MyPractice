
// module : "함수"를 다른파일에 만들어서 참조하는 것

const generatedMockPosts = (n) => {  //--> 매개변수로 전달받은 것 만큼 배열을 생성하겠다는 소리
    return Array(n).fill().map((_, i) => (  //--> 이런식으로 요소가 필요하지 않을 때는 아래 하이픈 (_) 을 넣어주면 된다
        {
            id: i,
            title: `title-${i+1}`,
            content: `content-${i+1}`
        }
    ))
    // 반환하는 타입이 "객체"일 때 return을 생략하려면 소괄호를 작성해줘야함
    // 객체를 return할 때 return을 생략하려면 ()로 감싸줘야한다, 안그러면 코드 블럭으로 인식
}
/*
    위에 함수를 해석해보자면,
    generatedMockPosts 를 내가 원하는 배열의 길이만큼 만드는 함수이다
    ex ) n에 1000을 넣으면 길이(length)가 1000인 배열이 만들어지고, 그리고 그 길이가 1000인 배열을 map 돌리게 된다
    map 돌린 결과물을 위의 id, title, content의 값으로 채워 넣겠다는 의미이다
*/
// 위에 거 어려우니 "보고만들기, 안보고만들기, 다르게만들어보기" 연습해보자


// 유틸함수  -->  프로젝트에 전반적으로 쓰일 수 있는 함수
// 백엔드에 저장되는 시간은 utc+00
// 한국의 세계협정시는 utc+09 (KST) 파싱해야합니다 (파싱 -> 분석해서 타입을 변환한다라는 뜻)
const jsonHelper = (str) => {
    return JSON.parse(str)  //--> str 을 분석해서 JSON 으로 바꾸겠다는 소리
    // "{a: "b"}" -> {a: b}  //--> 문자열 객체를 그냥 객체로 바꿔주겠다
}


// 밑에는 객체이다
module.exports = {  //-->  이 파일에서 어떤 것을 밖으로 내보낼거야? 라는 소리
    // generatedMockPosts: generatedMockPosts  //--> 이런식으로 "키"와 "값"이 일치하다면 생략할 수 있다
    generatedMockPosts,
    jsonHelper
}