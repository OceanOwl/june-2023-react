import React, {useEffect, useState} from 'react';
import {toDoService} from "../../services/toDoService";
import {Todo} from "./Todo";

const Todos = () => {

    const [todos,setTodos] = useState([]);

useEffect(()=>{
    toDoService.getAll().then(({data})=>setTodos(data))
},[])

    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};


export {Todos};