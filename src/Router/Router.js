import { createBrowserRouter } from "react-router-dom";
import DashboradLayout from "../layout/DashboradLayout";
import Main from "../layout/Main";
import AddProduct from "../pages/AddPdoducts/AddProduct";
import Categories from "../pages/Categories/Categories";
import Dashborad from "../pages/Dashborad/Dahsbord/Dashborad";

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
            },
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            }
          
        ]
    },
    {
        path:'/dashboard',
        element:<DashboradLayout></DashboradLayout>,
        children:[
            {
                path:'/dashboard',
                element:<Dashborad></Dashborad>
            }
        ]
    }

])


