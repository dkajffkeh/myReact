import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import FormExpression from "./Chapter_10/FormExpression";
import Accommodate from "./Chapter_07/Accommodate";
import Clock from "./chapter_04/Clock";
import Calculator from "./Chapter_12/TemperatureCalculator";
import ProfileCard from "./Chapter_13/ProfileCard";
import UpperComponent from "./Practice/UpperComponent";
import SampleBoard from "./Board/SampleBoard";

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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Clock/>} />
                <Route path="/chapter/8" element={<Accommodate/>} />
                <Route path="/chapter/9" element={<FormExpression/>}/>
                <Route path="/chapter/11" element={<Calculator/>}/>
                <Route path="/chapter/13" element={<ProfileCard/>} />
                <Route path="/board/test" element={<SampleBoard/>} />
            </Routes>
        </BrowserRouter>
);



// Chapter 7 CustomHook



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();