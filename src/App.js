import Main from "./pages/index/Main";
import SignUp from "./pages/signup/SignUp";
import Infor from "./pages/infor/Infor";
import Home from "./pages/home/Home";
import {Route, Routes} from 'react-router-dom';
import Content from "./pages/content/Content";
import Quiz from "./pages/quiz/Quiz";

function App() {
    return (
        <>
            <Routes>
                <Route path="/eqnu" element={<Main/>} />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/infor" element={<Infor/>}/>
                <Route path="/unit/:id" element={<Content/>}/>
                <Route path="/quiz/:id" element={<Quiz/>}/>
            </Routes>
        </>
    );
}

export default App;
