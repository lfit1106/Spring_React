import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";

const Content = () => {

    let { id } = useParams();
    const navigate = useNavigate();
    const [ item, setItem ] = useState([])

    const getContentItem = () => {
        axios.get(`/api/content/${id}`)
            .then(response => setItem(response.data)).catch(error => console.log('error'))
    }

    const handleList = () => {
        navigate('/api/list');
    }

    useEffect(() => {
        getContentItem()
    }, []);

    return (
        <div>
            <h4>Content</h4>
            <table className="table">
                <tbody>
                    <tr>
                        <th>번호</th>
                        <td>{item.id}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{item.title}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>{item.content}</td>
                    </tr>
                    <tr>
                        <th>작성일</th>
                        <td>{item.create_dt}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <Button variant="outline-primary" type="button" onClick={handleList}>목록</Button>
            </div>
        </div>
    );
};

export default Content;