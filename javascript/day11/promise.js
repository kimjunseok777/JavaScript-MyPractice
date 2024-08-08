
console.log("a")

// resolve가 안되면 절대 Promise 는 then 이 실행되지 않는다 (then, catch 는 대기상태 이다 --> resolve 또는 reject 로 대기를 푸는 것)
// resolve 와 reject 가 있기 때문에 Promise를 쓰는 것이다 --> 비동기라고 하는 것은 성공할 수도 있고, 실패할 수도 있다
//--> 성공과 실패 요직에 따라서 resolve, reject 로 다르게 분기 처리할 수 있는 것이다

new Promise((resolve, reject) => {
    // Promise 함수는 비동기 함수이다 (task queue)
    // setTimeout 과 setInterval 은 내가 시간을 정의했지만, Promise는 이 내부에 있는 함수가 실행되는 시간이 곧 걸리는 시간이다 (시간을 따로 정의하지 않는다)

    // Promise 실행 이후에 실행되는 코드는 비동기이다 -> then, catch (microtask queue)
    resolve("b")
    reject("에러!")
    // resolve와 reject는 둘중에 하나만 써야한다 (위에 쓴 것만 실행 됨)  -->  이해가 잘 안됨 (reject를 쓰려면 if 문으로 분기처리 해줘야 한다???...)

    // promise 내부에는 보통 비동기 함수가 성공했냐, 실패했냐 의 분기를 따로 구분해야되기 때문에, 보통 비동기함수가 들어간다
    //--> setTimeout, setInterval ... 등등 이 들어감
}).then((res) => {
    console.log(res)
    // promise.then
}).catch((err) => {
    console.log(err)
})
console.log("c")

//---------------------------------------------------------------------------------------------------------------------

// Promise 에도 가족이 있다

// all, allSettled, race

// 예를 들면 백엔드에게 요청을 보내야하는데

// 백엔드 요청 : a, b, c, d, e, f
// a가 실행된 후에 b, c, d, e, f 가 순서대로 실행되어야한다면(abcdef가 서로 관련 있다면) 순서대로 백엔드에 요청

// 만약에 a b c d e f 가 관련 없다면? (순서대로 실행 안해도 된다면?) -> 동시에 요청하는 것이 가장 빠릅니다

// batching request --> promise pool (동시 요청)  -->  all , allSettled , race
// 동일한 요청을 묶어서 한번에 처리하는 것

new Promise.all([/* promise1, promise2, promise3 */])
// all 의 단점은 하나라도 실패하면 모두 다 실패한 것으로 간주  -->  실행은 다 됐는데 실패한 것으로 간주할 수 있음
    //--> Promise.all 은 세개중에 하나만 실패해도 catch 로 간다

// 그래서 나온 것이 allSettled
// allSettled -> 실패한 것과 성공한 것을 구분할 수 있음  -->  실패한 것과 성공한 것이 결괏값이 다르게 온다
    //--> Promise.allSettled 는 전부 다 성공했다고 간다 (response로 간다), 거기서 성공(fulfilled) 한 것과 실패(rejected) 한 것이 구분이 된다

// race 는 가장 빨리온 결괏값 하나만 반환한다  -->  race도 참고로 다 실행은 된다, 하지만 받고 싶은 결괏값은 제일 빠른 것을 반환하다
    //--> Promise.race 는 가장 빨리온 친구 하나만 반환을 한다

// *** 실행이 안되는 것이 아니라, 실행은 다 한 이후에 반환하는 결괏값의 차이

// pending(대기) , fulfilled(이행) , rejected(실패)  -->  이렇게 구분

// pending : 실행하기 전, 실행하는 중
// fulfilled : 성공
// rejected : 실패
