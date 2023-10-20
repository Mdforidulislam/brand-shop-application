import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Addcard from "../Pages/Addcard/Addcard";
import Mycard from "../Pages/Mycard/Mycard";
import Productp from "../Components/Productpage/Productp";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import Update from "../Components/Updateproduct/Update";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Privet from "../Pages/Privet/Privet";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addcard',
                element: <Privet><Addcard></Addcard></Privet>
                
            },
            {
                path:'/mycard',
                element:<Privet><Mycard></Mycard></Privet>
            },
            {
                path:'/product/:brandname',
                element:<Productp></Productp>,
                loader: ({params}) => fetch(`https://assigment-10-telectronice-1keabxvkp-mdforidulislam.vercel.app/product/${params.brandname}`)
            },
            {
                path:'/productviwe/:id',
                element:<Privet><ViewDetails></ViewDetails></Privet>,
                loader: ({params})=> fetch(`https://assigment-10-telectronice-1keabxvkp-mdforidulislam.vercel.app/productviwe/${params.id}`)

            },
            {
                path:'/update/:id',
                element:<Privet><Update></Update></Privet>,
                loader: ({params})=>fetch(`https://assigment-10-telectronice-1keabxvkp-mdforidulislam.vercel.app/update/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])

export default Router;