import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const List = () => {

    const [ list, setList ] = useState([]);

    const getList = () =>{
        axios.get('/api/list')
            .then(response => setList(response.data)).catch(error => console.log('error'))
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <div>
          <h4>List</h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
                </thead>
                <tbody>
                {list?.map((item, index) =>
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td><Link to={`/api/content/${item.id}`} className='link'>{item.title}</Link></td>
                        <td>{item.nickname}</td>
                        <td>{item.create_dt}</td>
                    </tr>
                )}
                </tbody>
            </table>

        </div>
    );
};

export default List;