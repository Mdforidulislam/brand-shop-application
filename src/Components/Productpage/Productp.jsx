import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Productp = () => {
    const updateData = useLoaderData()
    console.log(updateData);
    const brandname = useParams()
    if (updateData.length < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `No product available on category ${updateData?.brandname}`,
      })
    }
    console.log(brandname);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto py-10 px-4">
            {
                updateData?.map(product => 
                    <div key={product._id} className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={product.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{product?.name}</h2>
                      <p>{product.short_description}</p>
                      <p>{product.price}</p>
                      <div className="card-actions w-full">
                        <Link className="w-full" to={`/productviwe/${product._id}`}><button className="btn btn-primary w-full">View Details</button></Link>
                      </div>
                    </div>
                  </div>
                  )
            }
        </div>
    );
};

export default Productp;