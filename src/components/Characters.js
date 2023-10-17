import React, {useEffect, useState} from 'react';

import {Character} from "./Character";

const Characters = () => {

    const [characters, setCharacters]= useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character?page=2')
            .then(value => value.json())
            .then(characters=>setCharacters(characters))
    },[])

    return (
        <div>
            {characters && characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};