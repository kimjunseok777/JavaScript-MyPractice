
const BACKEND_URL = 'https://jsonplaceholder.typicode.com'

fetch(BACKEND_URL + '/posts', {
    method: 'GET'
}).then((response) => response.json())
    .then((res) => {
        //...
        console.log(res)
        // return res
    })