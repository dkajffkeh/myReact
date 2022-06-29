import React, {useEffect, useState} from "react";

const Counter = (() => {

    const [count, setCount] = useState(0);
    const [string, setString] = useState('Hello');

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    useEffect(() => {
        console.log(string);
    })

    useEffect(() => {
        alert("마운트");
    })


    return (
        <div>
            <p>총 {count} 번 클릭했습니다</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            <button onClick={() => setString(string + 'World')}>문자열 클릭</button>
            <div onClick={() => alert("haha")}>경고!</div>
            <p>{string}</p>
        </div>
    )
})

export default Counter