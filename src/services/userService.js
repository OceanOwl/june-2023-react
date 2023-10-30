import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll:()=>axiosService.get(urls.users.base),
    getByUserId:(userId)=>axiosService.get(urls.users.byUserId(userId))
}

export {
    userService
}