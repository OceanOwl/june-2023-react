import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getByPostId:(postId)=>axiosService(urls.comments.getByPostId(postId))
}

export {
    commentService
}