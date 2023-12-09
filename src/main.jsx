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

//import loaders
import { loader as tempLoader } from "./loaders/getTemerature";
import { loader as salesLoader } from "./loaders/getProducts";

//import actions
import { action as setUser } from "./actions/setUser";
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
