import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const postService = {
    getPostsByUserId:(userId)=>axiosService.get(urls.posts.postByUserId(userId)),
    getPostById:(postId)=>axiosService.get(urls.posts.byPostId(postId))
}

export {
    postService
}