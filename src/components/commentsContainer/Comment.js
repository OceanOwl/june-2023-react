import React from 'react';

import {useNavigate} from "react-router-dom";
import css from './Comment.module.css'

const Comment = ({comment}) => {

    const {postId, id,name, email, body} = comment;

    const navigate = useNavigate();
    
    return (
        <div onClick={()=>navigate('posts', {state:postId})}>
            <div className={css.Comment}>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>email:{email}</div>
                <div>body:{body}</div>

            </div>

        </div>
    );
};

export {Comment};