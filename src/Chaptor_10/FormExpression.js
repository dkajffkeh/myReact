import React, {useEffect, useState} from "react";

export default function FormExpression() {

    const [value,setValue] = useState('값을 입력 해주세요');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        console.log(value);
    },[value])

    return (
        <div>
            <textarea value={value} onChange={handleChange}/>
        </div>
    )

}