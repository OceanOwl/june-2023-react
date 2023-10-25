import React, {useEffect, useState} from 'react';

import {postService} from "../../services/postService";
import {Post} from "./Post";

const Posts = ({postId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(({data})=>setPosts(data))
    },[postId])

    const filter = posts.filter((post)=>post.id===postId);

    console.log(filter);

    return (
        <div>
            {filter.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};