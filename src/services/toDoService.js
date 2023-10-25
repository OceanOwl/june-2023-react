import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const toDoService = {
    getAll:()=>axiosService.get(urls.todos)
}

export {
    toDoService
}