import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainListPage from "./pages/MainListPage";
import BookInfoPage from "./pages/BookInfoPage";
import {Provider} from "react-redux";
import store from "./store/store";

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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
