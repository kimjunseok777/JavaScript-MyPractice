

const arr = new Map([
    [101, "string01"],
    [102, "string02"],
    [103, "string03"],
    [104, "string04"]
])

const arr2 = new Set(arr)

arr2.forEach((el, i, origin) => {
    console.log(el)  //  둘이 똑같다, 왜일까?
    console.log(i)  //  둘이 똑같다, 왜일까?
})
