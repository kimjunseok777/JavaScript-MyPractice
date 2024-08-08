
// async, await
//--> async, await 이 생겨난 이유는 then 과 catch 를 사용하는 것이 싫어서 생겨났다

// axios 는 백엔드에게 요청하는 것

// axios.then((res) => axios.then((res) => axios.then...)) 이렇게 반복되버림
// then, catch는 동기적이지 않다라는 단점을 지울 수가 없다  -->  콜백을 계속해서 하는 것
//--> 즉, 비동기 이후에 비동기가 실행될 때마다 계속 then, then, then... 돼버리는 것 --> 싫다 (코드 어지러움)

// then 자체를 지우고 마치 동기적인 코드처럼 보이게 하고 싶은 것
//--> 함수를 정의합니다. 그리고 그 함수를 통째로 비동기 (프로미스) 로 만들어버림  -->  "일반함수" 를 "프로미스(비동기 묶음)" 로 만들어 버리는 것

function asyncPromise() {
    const response = new Promise((resolve) => resolve(3))
    // 여기서  resolve(3) 을 하면 promise(pending) 상태가 온다 --> 이유는 실행이 되지 않았기 때문 --> 이 3을 쓰려면 then 쓰는 수밖에 없다
    //--> 하지만 여기서 트릭을 하나 만들 것이다 --> 밑에 코드로 이어진다
}

//-------------------------------------------------------------------------------------------------

async function asyncPromise() {
    const response = await new Promise((resolve) => resolve(3))
    // function 앞에 async 를 붙이고, Promise 앞에 await 을 붙이면 된다
    //--> 그러면 결과가 promise(pending) 이 아닌, 3이 나온다
    //--> 얘가 결괏값을 내뱉을 때까지 기다린다는 뜻 --> then을 쓰지 않고 response를 바로 사용할 수 있음
    //--> then 을 쓰지 않아도 괜찮다라는 장점이 있다
    console.log(response)

    // 비동기가 끝날 때가지 기다림으로서 동기적으로 코드를 작성 가능하다 (가독성이 굉장히 좋다)
    //--> then, then... 할필요 없이 async , await 만 쓰면 코드가 위에서 아래로 순서대로 읽히는 것

    /*
        Promise 와 async await 의 차이점
            --> Promise 는 then 을 계속 붙여야 resolve 된 결괏값을 쓸 수 있었음
            --> 하지만 async 는 await 만 붙이면 resolve 된 값이 response 로 자동으로 온다 (자동으로 반환한다)
            --> async 는 마지막에 return 해주고 실행시켜줄 때 then 을 쓸 수 있다
    */
}

//-------------------------------------------------------------------------------------------------

async function asyncPromise() {
    // 실패했을 때는 에러 핸들링 구문을 추가해줘야 한다 --> try catch 구문
    // try( try 문장 안에는 : 성공 혹은 실패할 수 있는 코드 ) catch
    //--> Promise((_, reject) => reject())  -->  이러면 실패하는 것

    try {
    const response = await new Promise((_, reject) => reject(3))
    console.log(response)
    } catch(err) {
        console.log(err)
        //--> error 를 중간에 catch 한 것
        //--> 원래 이렇게 콘솔로그 찍을 거면 catch 하지 말아야 한다 (필요 없음)

        throw new Error (err)
        //--> 상단에 새로운 에러객체를 만들어서 던진다
        //--> 이러면 자바스크립트가 최상단으로 에러를 던져준다 (내가 중간에 잡아버리면 자바스크립트 상단에 에러가 안나니까 해본 것)
        //--> 상단에 에러 핸들링 하는 요직으로 넘기는 것 --> asyncPromise 함수 밖에 또 try catch 할 수 있다
    }
}
asyncPromise()
