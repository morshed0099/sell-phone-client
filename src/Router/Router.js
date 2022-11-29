import { createBrowserRouter } from "react-router-dom";
import DashboradLayout from "../layout/DashboradLayout";
import Main from "../layout/Main";
import AddProduct from "../pages/AddPdoducts/AddProduct";
import Categories from "../pages/Categories/Categories";
import Dashborad from "../pages/Dashborad/Dahsbord/Dashborad";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingnUp from "../pages/SignUp/SingnUp";
import ProductDetails from "../pages/Home/ProductDetalis"
import MyAddedProduct from "../pages/MyAddedProduct/MyAddedProduct";
import Allseller from "../pages/Alluser/Allseller";
import AllBuyer from "../pages/Alluser/AllBuyer";
import PrivateRout from "./PrivateRout";


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
                return fetch(`http://localhost:5000/category/${params.id}`)
               },
                element:<Categories></Categories>
            },
            
           {
            path:'/product/:id',
            loader:({params})=>{
             return fetch(`http://localhost:5000/product/${params.id}`)
            },
            element:<ProductDetails></ProductDetails>
           },
         
        ]
    },
    {
        path:'/dashboard',
        element:<DashboradLayout></DashboradLayout>,
        children:[
            {
                path:'/dashboard',
                element:<PrivateRout><Dashborad></Dashborad></PrivateRout>
            },
            {
                path:'/dashboard/myproduct',
                element:<MyAddedProduct></MyAddedProduct>
             },
             {
                path:'/dashboard/allseller',
                element:<Allseller></Allseller>
             },
             {
                path:'/dashboard/allbuyer',
                element:<AllBuyer></AllBuyer>
             },
             {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
               
        ]
    }

])


