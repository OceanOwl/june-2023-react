import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getByPostId:(postId)=>axiosService.get(urls.posts.ByPostId(postId))
}

export {
    postService
}