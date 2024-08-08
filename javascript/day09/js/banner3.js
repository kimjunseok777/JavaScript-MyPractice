
const $shadeBannerList = document.querySelectorAll('#shade-banner > ul > li')

const $shadePrevBtn = document.querySelector('.shade-prev-btn')
const $shadeNextBtn = document.querySelector('.shade-next-btn')

let shadeBannerIndex = 0;

function shadeOpacity() {
    $shadeBannerList.forEach((banner, index) => {
        if(index == shadeBannerIndex) {
            banner.style.opacity = 1
        } else {
            banner.style.opacity = 0
        }
    })
}

function shadePrev() {
    if(shadeBannerIndex <= 0) {
        shadeBannerIndex = $shadeBannerList.length-1
    } else {
        shadeBannerIndex--
    }
    shadeOpacity()
}
$shadePrevBtn.addEventListener('click', shadePrev)

function shadeNext() {
    if(shadeBannerIndex >= $shadeBannerList.length-1) {
        shadeBannerIndex = 0
    } else {
        shadeBannerIndex++
    }
    shadeOpacity()
}
$shadeNextBtn.addEventListener('click', shadeNext)

//-----------------------------------------------------------------------------

const $slideBannerList = document.querySelector('#slide-banner > ul')

const $slideNextBtn = document.querySelector('.slide-next-btn')
const $slidePrevBtn = document.querySelector('.slide-prev-btn')

let slideCount = 0;
const slideWidth = $slideBannerList.clientWidth

function slideNext() {
    if(slideCount >= $slideBannerList.children.length-1) {
        return
    } else {
        slideCount++
    }
    $slideBannerList.style.transform = `translateX(-${slideWidth*slideCount}px)`
}
$slideNextBtn.addEventListener('click', slideNext)

function slidePrev() {
    if(slideCount <= 0) {
        return
    } else {
        slideCount--
    }
    $slideBannerList.style.transform = `translateX(-${slideWidth*slideCount}px)`
}
$slidePrevBtn.addEventListener('click', slidePrev)