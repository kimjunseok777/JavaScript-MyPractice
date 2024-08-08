
// shade banner (투명도로 넘어가는 배너 만들기)

// next btn -> 다음 요소를 제외한 요소들 opacity 0
// 다음 요소는 opacity 1

// prev btn -> 이전 요소를 제외한 요소들 opacity 0
// 이전 요소는 opacity 1

// "현재요소" , "다음 요소" , "이전요소" 를 어떻게 구분할 수 있는가
// 다음요소와 이전요소를 제외한 요소

// 다음요소와 이전요소를 제외한 요소는 index 이다
// index === 다음요소 혹은 이전요소가 아니라면 제외한 요소

// 현재요소 : 0부터 시작해서 next 를 누르면 1씩 증가하는 값
// prev를 누르면 1씩 감속하는 값

let currentShadeBannerIndex = 0;

const $shadeBanners = document.querySelectorAll('#shade-banner > ul > li')

const $shadeBannerPrevBtn = document.querySelector('.shade-prev-btn')
const $shadeBannerNextBtn = document.querySelector('.shade-next-btn')

//----------------------------------------

function shadeBannerOpacity() {
    $shadeBanners.forEach((banner, index) => {
        if(index === currentShadeBannerIndex) {
            banner.style.opacity = 1
        } else {
            banner.style.opacity = 0
        }
    })
}

//----------------------------------------

function shadeBannerPrevBtn() {
    if(currentShadeBannerIndex <= 0) {
        currentShadeBannerIndex = $shadeBanners.length-1
    } else {
        currentShadeBannerIndex--
    }
    shadeBannerOpacity()
}
$shadeBannerPrevBtn.addEventListener('click', shadeBannerPrevBtn)


function shadeBannerNextBtn() {
    if(currentShadeBannerIndex >= $shadeBanners.length-1) {
        currentShadeBannerIndex = 0
    } else {
        currentShadeBannerIndex++
    }
    shadeBannerOpacity()
}
$shadeBannerNextBtn.addEventListener('click', shadeBannerNextBtn)

//-------------------------------------------------------------------------------

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
const slideBannerWidth = $slideBannerList.clientWidth  //  1080
// .banner-list 는 banner-item 3개를 감싸고 있는 부모인데, 왜 1080px 이 나오는지 모르겠음

const $slideBannerNextBtn = document.querySelector('.slide-next-btn')
const $slideBannerPrevBtn = document.querySelector('.slide-prev-btn')

//----------------------------------------

function slideBannerNextBtn() {
    if(slideBannerCount >= $slideBannerList.children.length-1) return
    slideBannerCount++  //-> 결국 이걸 - 냐 + 냐 이 차이로 움직이는 것

    $slideBannerList.style.transform = `translateX(-${slideBannerWidth * slideBannerCount}px)`
}
$slideBannerNextBtn.addEventListener('click', slideBannerNextBtn)

//----------------------------------------

function slideBannerPrevBtn() {
    if(slideBannerCount <= 0) return
    slideBannerCount--  //-> 결국 이걸 - 냐 + 냐 이 차이로 움직이는 것

    $slideBannerList.style.transform = `translateX(-${slideBannerWidth * slideBannerCount}px)`
}
$slideBannerPrevBtn.addEventListener('click', slideBannerPrevBtn)
