import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";
import Counter from "./Chapter_07/Counter";

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

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Counter/>
    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();