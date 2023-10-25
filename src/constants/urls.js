const baseURL = 'https://jsonplaceholder.typicode.com'

const comments = '/comments';
const posts = '/posts';
const albums = '/albums';
const todos = '/todos';

const urls = {
    comments,
    posts:{
        base:posts,
        ByPostId:(postId)=>`${posts}/${postId}`
    },
    albums,
    todos
}

export {
    baseURL,
    urls
}