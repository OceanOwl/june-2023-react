import React from 'react';

const Post = ({post, getPostId}) => {
   const {id, title, body} = post;



    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={()=>getPostId(id)}>get details</button>
        </div>
    );
};

export {Post};