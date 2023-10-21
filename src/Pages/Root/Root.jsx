import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import {  useEffect, useState } from "react";
import LocationContext from "../../Components/UseLocation/Location";





const Root = () => {
    const uselocation = useLocation()
    console.log(uselocation);
    const [userlocation, setUserlocation] = useState('');
    const userloaciton = useLocation();
  
    useEffect(() => {
      if (userloaciton.pathname !== '/login') {
        const userlocat = userloaciton.pathname;
        console.log(userlocat);
        setUserlocation(userlocat);
      }
    }, [userloaciton.pathname]);
   console.log(userlocation);
   console.log(userloaciton);
    return (
        <div >
            {/* <div>
                {userlocation}
            </div> */}
          <div>
             <Header></Header>
          </div>
            <LocationContext.Provider value={{name:'foridul'}}>
                   <Outlet></Outlet>
            </LocationContext.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Root;