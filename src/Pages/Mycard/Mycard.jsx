import { Rating } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { createcontext } from "../../Context/AuthContext/AuthContext";

const Mycard = () => {
  const {curentuser} = useContext(createcontext)
    const [productcard, setCardProduct] = useState([])
    useEffect(()=>{
        fetch('https://assigment-10-telectronice-4kjc1hzbo-mdforidulislam.vercel.app/cardinfo')
        .then(res => res.json())
        .then(data => setCardProduct(data))
    })
    const handleCardDelete = (id) =>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assigment-10-telectronice-4kjc1hzbo-mdforidulislam.vercel.app/cardDelete/${id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                   if (data.deletedCount > 0) {
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                   }
                   console.log(data);
                })
            
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
            
    }

    const cardFilter = productcard.filter(product => product.userEmail  === curentuser.email)
    return (
       <div>
        <div>
            {
              cardFilter.length < 1 ? " no Product Added here Please add product  " : ' '
            }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-6 py-10">
         
            {
                cardFilter?.map(product => 
                    <div key={product._id} className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={product.img}alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{product?.name}</h2>
                      <p>{product?.short_description.slice(0,70)}</p>
                      <p>{product?.price}</p>
                      <div>
                      <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                      </div>
                      <div className="card-actions">
                        <button onClick={()=>handleCardDelete(product._id)} className="btn btn-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                )
            }
        </div>
       </div>
    );
};

export default Mycard;