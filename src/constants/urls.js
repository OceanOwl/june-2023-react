const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users:{
        base :users,
        byUserId:(userId)=>`${users}/${userId}`
    },
    posts:{
        base :posts,
        postByUserId:(userId)=>`/users/${userId}${posts}`,
        byPostId:(postId)=>`${posts}/${postId}`
    },
    comments:{
        base :comments,
        getByPostId:(postId)=>`/posts/${postId}${comments}`
    }
}

export {
    urls,
    baseURL
}