import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    const {postId, id,name, email, body} = comment;

    const navigate = useNavigate();
    
    return (
        <div onClick={()=>navigate('posts', {state:postId})}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>

        </div>
    );
};

export {Comment};