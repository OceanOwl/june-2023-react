import React from 'react';

import {Posts} from "../components/PostsContainer/Posts";
import {Outlet} from "react-router-dom";

const PostPage = () => {
    return (
        <div>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostPage};