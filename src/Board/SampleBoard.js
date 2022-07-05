import React, {useEffect, useState} from 'react'

const dummyData = [
    {
        id:1,
        title:'sample1',
        views:234
    },
    {
        id:2,
        title:'sample2',
        views:234
    },
    {
        id:3,
        title:'sample3',
        views:234
    },
    {
        id:4,
        title:'sample4',
        views:234
    },
    {
        id:5,
        title:'sample5',
        views:234
    }
 ]

export default function SampleBoard() {

    const [boardRows, setBoardRows] = useState([]);

    useEffect(() => {
        setBoardRows(dummyData);
    }, [])

    const sentToDetail = () => {

    };

    return (
        <table border="1">
            <thead>
            <tr align="center" bgcolor="white" border="1px">
                <th>아이디</th>
                <th>제목</th>
                <th>조회수</th>
            </tr>
            </thead>
            <tbody>
                {boardRows.map(row => {
                    return (<tr onClick={sentToDetail}>
                                <td>{row.id}</td>
                                <td>{row.title}</td>
                                <td>{row.views}</td>
                            </tr>);
                })}
            </tbody>
        </table>
    );
}