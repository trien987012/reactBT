import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route ,Navigate} from 'react-router-dom';
// import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Page404 from './Pages/Page404/Page404';
import ProductManagement from './Pages/ProductManagement/ProductManagement';
import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <BrowserRouter>
        <Routes>
            <Route path="" element={<App />}>
                <Route path="" element={<Home />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="reactform" element={<ProductManagement />}></Route>
                <Route path="lifecycle" element={<ReactLifeCycle />}></Route>
                {/* <Route path='*' element={<Page404 />}></Route> */}
                <Route path='*' element={<Navigate to="" />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
