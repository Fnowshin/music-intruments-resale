import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyBookings/MyOrders";
import Blog from "../../Pages/Home/Components/Blog";
import Categories from "../../Pages/Home/Components/Categories/Categories";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductsDetail from "../../Pages/ProductsDetail/ProductsDetail";
import PageNotFound from "../../Pages/Shared/PageNotFound";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute"

import PrivateRoute from "./PrivateRoute";

 const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/productsdetail/:id',
                element: <PrivateRoute><ProductsDetail></ProductsDetail></PrivateRoute>,
                loader: ({ params }) => fetch(`https://music-instrument-server.vercel.app/products/${params.id}`)
            },
            {
                path:'/products',
                element: <PrivateRoute><Categories></Categories></PrivateRoute>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
            {
                path: '/blogs',
                element:<Blog></Blog>
            }
            
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout><Dashboard></Dashboard></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            }

        ]
    }
])

export default router;