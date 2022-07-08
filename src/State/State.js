import React, {useEffect, useState} from 'react'

export default function StateTestFun() {

    const [ value, setValue ] = useState('');
    const valueHandler = e => {
        setValue(e.target.value);
    }

    const [ viewMode, setViewMode ] = useState(true);

    useEffect(() => {
        setValue('DefaultValue');
        console.log(value);
    },[viewMode])

    return (
      <div>
          <input type='text' defaultValue={value} value={value} onChange={valueHandler} readOnly={viewMode} />
          <button onClick={() => setViewMode(!viewMode)}>모드전환</button>
      </div>
    );
}