import React from 'react';
import {useLocation} from "react-router-dom";
import {Posts} from "../components/postsContainer/Posts";

const PostPage = () => {

    const {state:postId} = useLocation();
    console.log(postId);
    return (
        <div>
            <Posts postId={postId}/>
        </div>
    );
};

export {PostPage};