import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from "./Chapter_07/Counter";
import MeasureExample from "./Chapter_07/MeasureExample";
import Accommodate from "./Chapter_07/Accommodate";

/*const root = createRoot(document.getElementById('root'));
root.render(<App />);*/

/*setInterval(() => {
    ReactDOM.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>,
        document.getElementById('root')
    )
}, 1000);*/
/*
function Welcome(props){
    return <h1>안녕, {props.name}</h1>
}

const element = <Welcome name="리엑트"/>;
ReactDOM.render(
    element,
    document.getElementById('root')
);
*/

// Chapter 3 CustomHook


ReactDOM.createRoot(document.getElementById('root')).render(
        <Accommodate/>
);


// Chapter 7 CustomHook



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();