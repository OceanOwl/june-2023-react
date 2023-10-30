import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getAll:()=>axiosService.get(urls.comments.base),
    getByCommentId:(commentId)=>axiosService(urls.comments.byCommentId(commentId))
}

export {
    commentService
}