import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {userService} from "../services/userService";

const UserDetailsPage = () => {

    const {userId} = useParams();

    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        userService.getByUserId(userId).then(({data}) => setUser(data))


    }, [userId])


    return (
        <div>

            <div>
                <div>{user.name}</div>
                <div>{user.username}</div>
                <div>{user.email}</div>
                <button onClick={() => navigate(user.id.toString())}>Posts of current user</button>
            </div>
        </div>
    );
};

export {UserDetailsPage};