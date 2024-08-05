import React, {StrictMode} from 'react';
import './App.css';
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import MainListPage from "./pages/MainListPage";
import BookInfoPage from "./pages/BookInfoPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainListPage />
    },
    {
        path: "book/:bookId",
        element: <BookInfoPage />
    }
])


function App() {
    return (
        <StrictMode>
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Layout/> }>
                        <Route path="/" element={<MainListPage />} />
                        <Route path="book/:bookId" element={<BookInfoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
        </StrictMode>
    );
}

export default App;
