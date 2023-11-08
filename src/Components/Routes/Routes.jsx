import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Appointment from "../Pages/Appointment/Appointment";
import PrivateRoutes from "./PrivateRoutes";
import CheckOut from "../Pages/CheckOut/CheckOut";
import SeeOrders from "../Pages/SeeOrders/SeeOrders";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
          path: '/apointment',
          element: <PrivateRoutes> <Appointment></Appointment> </PrivateRoutes>
        },
        {
          path: '/checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`https://car-doctor-server-nbmny7zzu-azadgmtls-projects.vercel.app/services/${params.id}`)
        },
        {
          path: '/orders',
          element: <PrivateRoutes> <SeeOrders></SeeOrders> </PrivateRoutes>
        }
      ]
    },
  ]);

export default router