import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import FormExpression from "./Chapter_10/FormExpression";
import Accommodate from "./Chapter_07/Accommodate";
import Clock from "./chapter_04/Clock";
import Calculator from "./Chapter_12/TemperatureCalculator";
import ProfileCard from "./Chapter_13/ProfileCard";
import SampleBoard from "./Board/SampleBoard";
import ObjectHandler from "./ObjectTest/ObjectHandler";
import InputBoxDebug from "./InputBoxTest/InputBoxDebbug";
import {Provider} from "react-redux";
import {createStore} from "redux";
import counterReducer from "./redux/rootReducer";
import {store} from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Clock/>} />
                <Route path="/chapter/8" element={<Accommodate/>} />
                <Route path="/chapter/9" element={<FormExpression/>}/>
                <Route path="/chapter/11" element={<Calculator/>}/>
                <Route path="/chapter/13" element={<ProfileCard/>} />
                <Route path="/board/test" element={<SampleBoard/>} />
                <Route path="/object/test" element={<ObjectHandler/>} />
                <Route path="/object/debug" element={<InputBoxDebug/>} />
            </Routes>
        </BrowserRouter>
    </Provider>
);



// Chapter 7 CustomHook



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();