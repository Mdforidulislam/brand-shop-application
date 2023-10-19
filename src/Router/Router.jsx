import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Addcard from "../Pages/Addcard/Addcard";
import Mycard from "../Pages/Mycard/Mycard";
import Productp from "../Components/Productpage/Productp";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import Update from "../Components/Updateproduct/Update";


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
                element:<Addcard></Addcard>
            },
            {
                path:'/mycard',
                element:<Mycard></Mycard>
            },
            {
                path:'/product/:brandname',
                element:<Productp></Productp>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.brandname}`)
            },
            {
                path:'/productviwe/:id',
                element:<ViewDetails></ViewDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/productviwe/${params.id}`)

            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader: ({params})=>fetch(`http://localhost:5000/update/${params.id}`)
            }
        ]
    }
])

export default Router;