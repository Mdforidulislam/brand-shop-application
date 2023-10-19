import { useContext } from "react";
import { createcontext } from "../../Context/AuthContext/AuthContext";
import { Link, Navigate } from "react-router-dom";

const Privet = ({children}) => {
    const {curentuser} = useContext(createcontext)
   if (curentuser) {
     return children;
   } else{
    return  <Navigate to={'/login'}></Navigate> 
   }
};

export default Privet;