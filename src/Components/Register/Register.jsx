import { useContext } from "react";
import { Link } from "react-router-dom";
import { createcontext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
    const {createuserEmail} = useContext(createcontext)
    console.log(createuserEmail);
    const handleSubmit = ( event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;

        if (password.length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password is invalid. It must be less then 6 criteria.!',
              })
        }
        if (!passwordPattern.test(password)) {
           return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password is invalid. It must meet the specified criteria.!',
              })
        }
      

        createuserEmail(email,password)
        .then(result => console.log(result))
        .catch(error => console.log(error))

       console.log(email,password);
    } 
    return (
        <div className="bg-gray-300 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                       
                    />
                </div>
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
                    Register
                </button>
                <Link to={'/login'}><p className="text-green-500">Allready Register</p></Link>
            </form>
        </div>
    </div>
    );
};

export default Register;