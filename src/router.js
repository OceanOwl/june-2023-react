import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UserPage} from "./pages/UserPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostPage} from "./pages/PostPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {CommentPage} from "./pages/CommentPage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {
                path: 'users', element: <UserPage/>, children: [
                    {
                        path: ':userId', element: <UserDetailsPage/>, children: [
                            {
                                path: 'posts', element: <PostPage/>, children: [
                                    {path: ':postId', element: <PostDetailsPage/>,children:[
                                            {path:'comments', element:<CommentPage/>}
                                        ]}
                                ]
                            }
                        ]
                    },

                ]
            },

        ]
    }
]);

export {
    router
}