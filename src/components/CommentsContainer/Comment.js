import React from 'react';

const Comment = ({comment}) => {

    const {postId, name, email,body} = comment;


    return (
        <div>
            <div>{postId}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};


export {Comment};