
const arr = {
    age: 20,
    height: 180
}

const arr2 = new Map(Object.entries(arr))

console.log(arr)
console.log(arr2)

const arr3 = Object.fromEntries(arr2)

console.log(arr3)