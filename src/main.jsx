import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import views
import MainPage from './pages/mainPage';
import LinearChart from './pages/linearChart';
import BarChart from './pages/barChart';
import CreateUser from './pages/createUser';
import CheckUserID from './pages/checkUserID';
import UpdateUser from './pages/updateUser';

//import loaders
import { loader as tempLoader } from "./loaders/getTemerature";
import { loader as salesLoader } from "./loaders/getProducts";
import { loader as getUser } from "./loaders/getUser";

//import actions
import { action as setUser } from "./actions/setUser";
import { action as updateUser } from "./actions/updateUser";

//import style
import './style/style.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
    path: "/linear-chart",
    element: <LinearChart/>,
    loader: tempLoader,
  },
  {
    path: "/bar-chart",
    element: <BarChart/>,
    loader: salesLoader
  },
  {
    path: "/create-user",
    element: <CreateUser/>,
    action: setUser
  },
  {
    path: "/update-user",
    element: <CheckUserID/>,
  },
  {
    path: "/update-user/:idUser",
    element: <UpdateUser/>,
    loader: getUser,
    action: updateUser
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
