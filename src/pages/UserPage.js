import React from 'react';
import {Outlet} from "react-router-dom";

import {Users} from "../components/UsersContainer/Users";

const UserPage = () => {
    return (
        <div>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UserPage};