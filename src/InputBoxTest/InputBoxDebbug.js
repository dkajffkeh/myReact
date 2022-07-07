import React, {useEffect, useState} from 'react';

export default function InputBoxDebug() {

    const [dbValue,setDbValue] = useState({});
    const [viewMode,setViewMode] = useState(true);

    useEffect(() => {

        const axiosResponse = {
            id:"1",
            title:"title1"
        }

        setDbValue(axiosResponse);

    },[])

    return (
      <div>
          <input type='text' readOnly={viewMode} defaultValue={dbValue.title || ''}/>
          <button onClick={() => setViewMode(!viewMode)}>읽기모드</button>
      </div>
    );

}

function renderingTest () {


    return (
        <div>
            {}
        </div>
    );
}