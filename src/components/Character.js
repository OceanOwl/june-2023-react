import React from 'react';

const Character = ({character}) => {

    const{id,status,species,gender}= character

    return (
        <div>
            <div>id:{id}</div>
            <div>status:{status}</div>
            <div>species:{species}</div>
            <div>gender:{gender}</div>
        </div>
    );
};

export {Character};