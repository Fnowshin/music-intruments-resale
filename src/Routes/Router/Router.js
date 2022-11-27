import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyBookings/MyOrders";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductsDetail from "../../Pages/ProductsDetail/ProductsDetail";
import PageNotFound from "../../Pages/Shared/PageNotFound";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import BuyersRoute from "./BuyersRoute";
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
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
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
                element:<BuyersRoute> <MyOrders></MyOrders></BuyersRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            }

        ]
    }
])

export default router;