import React, {useEffect, useState} from 'react';

import {launchService} from "../../services/lauchService";
import {Launch} from "../Launch/Launch";




const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
launchService.getAll().then(({data})=>{
    const sorted = data.filter(item => item.launch_year !== "2020");
    setLaunches(sorted)

    }
)
    }, []);


    return (
        <div>
            {launches.map(launch=><Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};