
import { useContext } from "react";
import { Link } from "react-router-dom";
import { createcontext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import LocationContext from "../UseLocation/Location";



const Login = () => {
   const {singinWithGoogle,singinWithGoogleauth,loginwithEmail} = useContext(createcontext)
   const {userlocation} = useContext(LocationContext)
   console.log(userlocation);
    const handleSubmit =(event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        loginwithEmail(email,password)
        .then(result => {
            console.log(result)
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
              })
            console.log(error)
        })
    }

    console.log(singinWithGoogle,singinWithGoogleauth);
    return (
        <div className="bg-gray-400 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
                >
                    Login
                </button>

                 
            </form>
                <button onClick={singinWithGoogle} className="btn mt-5 rounded-none w-full border-lime-100 bg-none">Google</button>
                <Link to={'/register'}><p className="text-green-600 mt-4">Register here</p></Link>
        </div>
    </div>
    );
};

export default Login;