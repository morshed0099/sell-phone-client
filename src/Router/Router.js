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
import MyOrder from "../pages/MyOrder/MyOrder";
import MyWishList from "../pages/MyWishList/MyWishList";
import AdminRoute from "./AdminRoute";
import Payment from "../pages/MyOrder/Payment";
import DisplayError from "../Shered/DisplayError/DisplayError";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";
import Blog from "../pages/Blog/Blog";




export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
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
                path:'/blog',
                element:<Blog></Blog>
            },            
            
            {
                path:'/signup',
                element:<SingnUp></SingnUp>
            },
            {
                path:'/category/:id',
                loader:({params})=>{ 
                return fetch(`https://sell-phones-server-morshed0099.vercel.app/category/${params.id}`)
               },
                element:<PrivateRout><Categories></Categories></PrivateRout>
            },
            
           {
            path:'/product/:id',
            loader:({params})=>{
             return fetch(`https://sell-phones-server-morshed0099.vercel.app/product/${params.id}`)
            },
            element:<PrivateRout><ProductDetails></ProductDetails></PrivateRout>
           },
         
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRout><DashboradLayout></DashboradLayout></PrivateRout>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/dashboard',
                element:<PrivateRout><Dashborad></Dashborad></PrivateRout>
            },
            {
                path:'/dashboard/myproduct',
                element:<SellerRoute><MyAddedProduct></MyAddedProduct></SellerRoute> 
             },
             {
                path:'/dashboard/allseller',
                element:<AdminRoute><Allseller></Allseller></AdminRoute>
             },
             {
                path:'/dashboard/allbuyer',
                element:<AdminRoute><AllBuyer></AllBuyer></AdminRoute>
             },
             {
                path:'/dashboard/addproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute> 
            },
            {
                path:'/dashboard/wishlist',
                element:<BuyerRoute><MyWishList></MyWishList></BuyerRoute>
            },               
            {
                path:'/dashboard/order',
                element:<BuyerRoute><MyOrder></MyOrder></BuyerRoute>
            },
            {
                path:'/dashboard/payment/:id', 
                loader:({params})=>{
                    return fetch(`https://sell-phones-server-morshed0099.vercel.app/booking/${params.id}`)
                } ,            
                element:<PrivateRout><Payment></Payment></PrivateRout>,
                
            },
        ]
    }

])


