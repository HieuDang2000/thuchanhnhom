import Main from "./pages/index/Main";
import SignUp from "./pages/signup/SignUp";
import Infor from "./pages/infor/Infor";
import Quiz from "./pages/quiz/Quiz";
import Home from "./pages/home/Home";
import Content from "./pages/content/Content";
import {Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';

function App() {
    const [token, setToken] = useState();

    return (
        <>
            <Routes>
                <Route path="/signin" element={<Main/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/infor" element={<Infor/>}/>
                <Route path="/unit/:id" element={<Content/>}/>
                <Route path="/quiz/:id" element={<Quiz/>}/>
            </Routes>
        </>
    );
}

export default App;
