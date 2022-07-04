import React, {useState} from 'react';

export default function UpperComponent() {

    const [integer, setInteger] = useState(0);

    const integerHandler = () => {
        setInteger(integer + 1);
    }

    const handleIntegerByInner = (value) => {
        setInteger(value);
    }

    return (
        <div>
            <InnerComponent integer={integer} handleIntegerByInner={handleIntegerByInner} />
            <span>{integer}</span>
        </div>
    );
}

function InnerComponent (props) {

    const handleChange = (event) => {
        return props.handleIntegerByInner(event.target.value);
    }

    return (
        <div>
            <input type="number" value={props.integer} onChange={handleChange} />
        </div>
    )

}