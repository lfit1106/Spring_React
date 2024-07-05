import React, {useEffect, useState} from 'react';
import axios from "axios";

const Main = () => {

    const [ data, setData ] = useState('');

    const getData =()=>{
        axios.get('/api/main')
            .then(response => setData(response.data))
            .catch(error => console.log('error'))
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
          <h2>Main</h2>
            <div>오늘의 인사 : {data} </div>
        </div>
    );
};

export default Main;