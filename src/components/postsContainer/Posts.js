import React, {useEffect, useState} from 'react';

import {postService} from "../../services/postService";
import {Post} from "./Post";

const Posts = ({postId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getByPostId(postId).then(({data})=>setPosts(data))
    },[postId])



    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};