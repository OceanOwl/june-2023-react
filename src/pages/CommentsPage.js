import React from 'react';

import {Comments} from "../components/commentsContainer/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};