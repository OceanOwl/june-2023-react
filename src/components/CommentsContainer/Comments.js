import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentService} from "../../services/commentService";
import {Comment} from "./Comment";

const Comments = () => {

    const {postId} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByPostId(postId).then(({data}) => setComments(data))
    }, [postId])

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};


export {Comments};