import React, { useState, useEffect } from "react";
import userCounter from "./useCounter";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

export default function Accommodate() {

    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);


    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
    },[count]);

    return (
      <div style={{padding: 16}}>
          <p>{`총 ${count}명 수용했습니다.`}</p>

          <button onClick={increaseCount} disabled={isFull}>입장</button>
          <button onClick={decreaseCount}>퇴장</button>

          {isFull && <p style={{color:'red'}}>정원이 가득찼습니다.</p>}
      </div>
    );

}

