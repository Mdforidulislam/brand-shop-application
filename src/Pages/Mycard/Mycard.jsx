import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Mycard = () => {
    const [productcard, setCardProduct] = useState([])
    useEffect(()=>{
        fetch('https://assigment-10-telectronice-gwxtzcdks-mdforidulislam.vercel.app/cardinfo')
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
                fetch(`https://assigment-10-telectronice-gwxtzcdks-mdforidulislam.vercel.app/cardDelete/${id}`,{
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
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-6 py-10">
          <div>
            {
              productcard.length < 1 ? " no Product Added here Please add product  " : ' '
            }
          </div>
            {
                productcard.map(product => 
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
                        <Link to={`/update/${product._id}`}><button className="btn btn-primary">Update</button></Link>
                      </div>
                    </div>
                  </div>
                )
            }
        </div>
    );
};

export default Mycard;