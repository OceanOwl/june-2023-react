import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const postService = {
    getAll:()=>axiosService.get(urls.posts.base),
    getByPostId:(postId)=>axiosService.get(urls.posts.byPostId(postId))
}

export {
    postService
}