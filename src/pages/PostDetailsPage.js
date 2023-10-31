import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate, useParams} from "react-router-dom";

import {postService} from "../services/postService";

const PostDetailsPage = () => {

    const {postId} = useParams();

    const navigate = useNavigate();

    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getPostById(postId).then(({data}) => setPost(data))
    }, [postId])

    console.log(post);

    return (
        <div>
            <div>
                <div>{post.userId}</div>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
                <button onClick={()=>navigate('comments')}>Get All Comments</button>
            </div>
            <Outlet/>
        </div>
    );
};


export {PostDetailsPage};