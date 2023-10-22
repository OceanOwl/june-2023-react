import {axiosService} from "./axiosService";

import {characters} from "../urls/urls";

const characterService = {
    getAll:()=>axiosService.get(characters)
}

export {
    characterService
}