import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
// import { New } from './components/New/New';
import { User } from './pages/User/User';

// на главной странице располагаются кнопки регистрация и авторизация
// /singup - форма регистрация
// /singin - форма авторизация
// в ответ приходит token = res.json() - сохранить в localStorage
// 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    },
  {
    path: '/users/:userId/petr/:id',
    element: <User />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
