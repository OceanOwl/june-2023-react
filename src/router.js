import {createBrowserRouter, Navigate} from "react-router-dom";

import {HomePage} from "./pages/HomePage";
import {ToDoPage} from "./pages/ToDoPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {path: '', element: <HomePage/>, children:[
            {index:true, element:<Navigate to={'comments'}/>},
            {path:'todos', element:<ToDoPage/>},
            {path:'albums', element:<AlbumsPage/>},
            {path:'comments', element:<CommentsPage/>, children:[
                    {path:'posts', element:<PostPage/>}
                ]}

        ]},

]);

export {
    router
}