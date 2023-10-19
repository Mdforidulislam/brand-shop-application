import { Rating } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewDetails = () => {
    const  {brandname,category,img,name,price,rating,short_description} = useLoaderData()

    const buyproductinfo = {brandname,category,img,name,price,rating,short_description}
    console.log();
   

    const hanleSubmitCard = () =>{
        fetch('http://localhost:5000/productadd',{
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
           <div className="card w-2/4 mx-auto bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
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