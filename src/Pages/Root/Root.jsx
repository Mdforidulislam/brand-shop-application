import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Root = () => {
    return (
        <div >
          <div>
             <Header></Header>
          </div>
                <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;