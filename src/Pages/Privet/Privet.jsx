import { useContext } from "react";
import { createcontext } from "../../Context/AuthContext/AuthContext";
import { Link, Navigate } from "react-router-dom";

const Privet = ({children}) => {
    const {curentuser,loading} = useContext(createcontext)
    if (loading) {
      return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg "></span></div>
    }
   if (curentuser) {
     return children;
   } else{
    return  <Navigate to={'/login'}></Navigate> 
   }
};

export default Privet;