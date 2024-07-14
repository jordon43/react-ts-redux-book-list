import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainListPage from "./pages/MainListPage";

function App() {
    return (
        <div className="App">

            <header/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainListPage />} />
                </Routes>
            </BrowserRouter>

            <footer/>

        </div>
    );
}

export default App;
