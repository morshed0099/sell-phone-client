import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categories from "../pages/Categories/Categories";

import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingnUp from "../pages/SignUp/SingnUp";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SingnUp></SingnUp>
            },
            {
                path:'/category/:id',
                loader:({params})=>{ 
                return fetch(`phone.json/category/:id${params.id}`)
               },
                element:<Categories></Categories>
            }
          
        ]
    }
])


