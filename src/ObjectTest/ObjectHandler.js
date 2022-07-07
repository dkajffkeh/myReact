import React, {useState} from 'react';


export default function ObjectHandler() {

    const [ipInput, setIpInput] = useState('');
    const [ips, setIp] = useState([
        {
            ip:'127.0.0.1'
        },
        {
            ip:'127.1.2.3'
        }
    ]);

    const inputHandler = (e) => {
        setIpInput(e.target.value);
    }

    const insertIp = () => {
        console.log(ipInput);
        setIp(
            [...ips,{
                ip : ipInput,
            }]
        );
    }

    const removeIp = ip => {
        console.log(ip);
        setIp(ips.filter(inIp => inIp.ip !== ip));
    }


    return (
      <div>
          <input type='text' onChange={inputHandler}/>
          <button onClick={insertIp}>+ 추가</button>
          {
              ips.map( ip => {
                  return (
                  <div key={ip.ip}>
                  <span>{ip.ip}</span>
                  <button onClick={() => removeIp(ip.ip)}>delete</button>
                  </div>);
              })
          }
      </div>
    );


}