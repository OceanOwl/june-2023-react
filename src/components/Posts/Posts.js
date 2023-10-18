import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import {Post} from "../Post/Post";

const Posts = () => {

    const [posts, setPosts]=useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect ( ()=>{
postService.getAll().then(({data})=>setPosts(data))
    },[])

    return (
        <div>
            <div>
                {posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export {Posts};