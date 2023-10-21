import { Rating } from "@mui/material";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { createcontext } from "../../Context/AuthContext/AuthContext";

const ViewDetails = () => {
    const {curentuser} = useContext(createcontext)
    const userEmail = curentuser.email;
    console.log(userEmail);
    const  {brandname,category,img,name,price,rating,short_description} = useLoaderData()

    const buyproductinfo = {userEmail,brandname,category,img,name,price,rating,short_description}
    console.log(buyproductinfo);
   

    const hanleSubmitCard = () =>{
        fetch('https://assigment-10-telectronice-4kjc1hzbo-mdforidulislam.vercel.app/productadd',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(buyproductinfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged) {
                Swal.fire(
                    'Good job!',
                    'SuccessFully purchase Product!',
                    'success'
                  )
            }})
    }
    return (
        <div className="max-w-screen-xl mx-auto px-6 py-10">
           <div className="card md:w-2/4 mx-auto bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h1 className="text-xl">Brand Name : {brandname}</h1>
                <h1 className="text-xl">product Type : {category}</h1>
                <p>{short_description}</p>
                <p>Price: ${price}</p>
                <div>
                      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                </div>
                <div className="card-actions justify-end w-full">
                <button onClick={hanleSubmitCard} className="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ViewDetails;