
// shade banner (투명도로 넘어가는 배너 만들기)

// next btn -> 다음 요소를 제외한 요소들 opacity 0
// 다음 요소는 opacity 1

// prev btn -> 이전 요소를 제외한 요소들 opacity 0
// 이전 요소는 opacity 1

// "현재요소" "다음 요소" "이전요소" 를 어떻게 구분할 수 있는가
// 다음요소와 이전요소를 제외한 요소

// 다음요소와 이전요소를 제외한 요소는 index 이다
// index === 다음요소 혹은 이전요소가 아니라면 제외한 요소

// 현재요소 : 0부터 시작해서 next 를 누르면 1씩 증가하는 값
// prev를 누르면 1씩 감속하는 값

let currentShadeBannerIndex = 0;  // 변해야하는 값이기에 let 으로 선언해준 것

// 현재 선택된 배너 외 나머지 배너를 제거해야하므로 배열로 가지고 옵니다
// 내가 opacity를 조절할 요소들을 가지고 와야하는 것을 생각해내야 한다
const $shadeBanner = document.querySelectorAll('#shade-banner > ul > li')
// 내가 컨트롤 해야하는 아이템의 개수가 여러개다 --> 단수가 아닌 "배열" 로 가져와야 한다

// 버튼이 클릭될 때 마다 이벤트가 발생해야함 -> 버튼 요소가 필요하다
const  $shadeBannerPrevBtn = document.querySelector('.shade-prev-btn')
const  $shadeBannerNextBtn = document.querySelector('.shade-next-btn')

//--------------------------------------------
// prevBtn 함수

function handlePrevShadeBannerBtn() {
    // 분기 생성 (1일때 prev버튼을 누르면 3이 나와야한다) --> if
    // 첫번째는 --> 마지막  // 그 외에는 이전

    // $shadeBanner 를 순회하여
    // currentShadeBannerIndex와 index가 같은 것만 opacity 1
    // 나머지는 opacity 0으로 만든다

    if(currentShadeBannerIndex <= 0) {
        currentShadeBannerIndex = $shadeBanner.length - 1;
        // 보여줘야할 인덱스를 마지막 인덱스로 수정 (1이 보일 때 prev를 누르면 3이 보인다)
    } else {
        currentShadeBannerIndex-- // 핵심 기능
    }

    // 순회한 이유에 대해서 생각해봐야함
    // 나머지는 opacity = 0; 현재 보여줘야하는 것만 opacity = 1;
    $shadeBanner.forEach((banner, index) => {
        if(index === currentShadeBannerIndex) {
            banner.style.opacity = 1; // index와 현재 배너인덱스가 같다면 opacity 1
        } else {
            banner.style.opacity = 0; // 아니라면 opacity 0
        }
    })
}

$shadeBannerPrevBtn.addEventListener('click', handlePrevShadeBannerBtn)
// 버튼을 클릭했을 때 handlePrevShadeBannerBtn 함수를 실행하는 이벤트

//--------------------------------------------
// nextBtn 함수 만들어보기, 설계, prev와 겹치는 로직 함수로 만들어보기

function handleNextShadeBannerBtn() {
    if(currentShadeBannerIndex >= $shadeBanner.length-1) {
        currentShadeBannerIndex=0
    } else {
        currentShadeBannerIndex++
    }

    $shadeBanner.forEach((banner, index) => {
        if(index == currentShadeBannerIndex) {
            banner.style.opacity = 1;
        } else{
            banner.style.opacity = 0;
        }
    })
}
$shadeBannerNextBtn.addEventListener('click', handleNextShadeBannerBtn)


// next , prev 겹치는 로직 함수 제작 :
function shade() {
    $shadeBanner.forEach((banner, index) => {
        if(index == currentShadeBannerIndex) {
            banner.style.opacity = 1;
        } else{
            banner.style.opacity = 0;
        }
    })
}
// 이렇게 해서 겹치는 로직 제거해주고 "shade()" 으로 대체해주면 된다


//-----------------------------------------------------------------------------


// slide --> index필요 없음 count를 쓰면 됨 (순서가 중요하지 않기 때문)
// 해당 count 의 곱하기 만큼 왼쪽, 오른쪽으로 밀면 된다 (1080px)

// style.translate
// style.transform = 'translateX( ??px * count)  -->  1번 ?? 와 2번 ?? 를 찾아야 됨

// 얘는 순회가 필요없기에 더 쉽다 -> 그냥 있는 것을 밀면 된다
// --> 대신 어떤 것을 밀어야하는지 찾아내야한다
// --> 뭐를 밀어야하고, 어느정도 밀어야하는지

// next, prev -> count++, count--


let slideBannerCount = 0;
const $slideBannerList = document.querySelector('#slide-banner > .banner-list')

const $slideBannerNextBtn = document.querySelector('.slide-next-btn')
const $slideBannerPrevBtn = document.querySelector('.slide-prev-btn')

const slideBannerWidth = $slideBannerList.clientWidth
//--> 배너의 너비값은 Prev, Next 버튼 모두 같기에 전역변수로 선언해준 것

// Prev 버튼 :
const handleSlideBannerPrevBtn = () => {

    if(slideBannerCount <= 0) return
    slideBannerCount--

    // 자바스크립트 요소 크기 가지고오는 방법
    // offsetWidth => 마진이나 패딩을 포함한 크기 (가장 많이 사용하는 방법)
    // clientWidth => 마진과 테두리를 제외한 실제 내용물의 크기 (패딩 포함)
    $slideBannerList.style.transform = `translateX(-${slideBannerWidth * slideBannerCount}px)`
}
$slideBannerPrevBtn.addEventListener('click', handleSlideBannerPrevBtn)

//------------------------------------------------------

// Next 버튼 :
const handleSlideBannerNextBtn = () => {

    if(slideBannerCount >= $slideBannerList.children.length-1) return
    slideBannerCount++

    $slideBannerList.style.transform = `translateX(-${slideBannerWidth * slideBannerCount}px)`
    // 여기서 transform 은 값이 누적되는 것이 아닌 "위치" 이기 때문에 여기서도 마이너스 이다
    // 왼쪽으로 움직여야하는 것은 초기 상태 기준 "-"
    // translate는 누적값이 아니기 때문이다 
}
$slideBannerNextBtn.addEventListener('click', handleSlideBannerNextBtn)