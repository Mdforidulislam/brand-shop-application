import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { createcontext } from "../../Context/AuthContext/AuthContext";

const Header = () => {
  const {curentuser,singOutPage} = useContext(createcontext)
    const manuNav = <>
        <NavLink to={'/'}><li className="mr-4">Home</li></NavLink>
        <NavLink to={'/addcard'}><li className="mr-4">Add Product</li></NavLink>
        <NavLink to={'/mycard'}><li className="mr-4">My Card</li></NavLink>
    </>
    console.log(curentuser);
    return (
        <div className=" shadow bg-slate-100">
              <div className="navbar bg-base-500  max-w-screen-xl mx-auto">
            <div className="navbar-start ">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {manuNav}
                </ul>
              </div>
                <Link><img className="w-[70px] h-[70px]" src="https://png.pngtree.com/png-clipart/20230307/original/pngtree-design-3d-electronic-logo-png-image_8974833.png" alt="brand name" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {manuNav}
              </ul>
            </div>
            <div className="navbar-end">
              
                {
                  curentuser ? 
                  <div className=" flex items-center">
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          {
                            curentuser.photoURL?  <img src={curentuser.photoURL} alt=""  /> :
                             <img src='https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png' alt=""  />
                          }
                      
                        </div>
                     </label> 
                      <button onClick={singOutPage} className="btn bg-white">LogOut</button>
                  </div>
              
              : 
              <Link to={'/login'}><button className="btn bg-white">Login</button></Link>
                }
            </div>
          </div>
        </div>
    );
};

export default Header;