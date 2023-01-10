export const getData = () => {
    return fetch('https://dummyjson.com/comments')
    .then((res)=> res.json())
}