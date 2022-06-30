import {useCallback, useState} from "react";

export default function MeasureExample(callback, deps) {
    const [height, setHeight] = useState();

    const measuredRef = useCallback(node => {
        if(node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return (
      <>
        <h3 ref={measuredRef}>안녕 리엑트</h3>
        <h2>위 헤더의 높이는 {Math.round(height)}px 입니다.}</h2>
      </>
    );
}