import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getByPostId:(postId)=>axiosService.get(urls.posts.ByPostId(postId)),
    getAll:()=>axiosService.get(urls.posts.base)
}

export {
    postService
}