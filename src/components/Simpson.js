import React from 'react';


const Simpson = ({simpson}) => {

    const {name, age, image} = simpson;

    return (
        <div>
            <div>name: {name}</div>
            <div>age: {age}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Simpson};