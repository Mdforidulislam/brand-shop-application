import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const productinfo = useLoaderData()
    
    const hanelUpdateProduct = (event) =>{
        event.preventDefault()
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const productInfo = {img,type,name,brand,price,description,rating}
        console.log(productInfo);
        
        fetch(`https://assigment-10-telectronice-1keabxvkp-mdforidulislam.vercel.app/update/${productinfo._id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
           body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire(
                    'Good job!',
                    'Successfully update Product!',
                    'success'
                  )
            }
        })
    }
   
    return (
        <div className=" max-w-screen-xl mx-auto px-6 py-10">
            <div>
                ProductInfo : <h1>{productinfo.name}</h1>
                <img className=" wf-[100px] h-[100px] " src={productinfo.img} alt="" />
            </div>
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md shadow-md">
            <form  onSubmit={hanelUpdateProduct}>
                <input
                    type="text"
                    name="img"
                    className="w-full p-2 mb-2 rounded-md border border-gray-300"
                    placeholder="Image URL"
                    defaultValue={productinfo.img}
                />
                <input
                    type="text"
                    name="name"
                    className="w-full p-2 mb-2 rounded-md border border-gray-300"
                    placeholder="Name"
                    defaultValue={productinfo.name}
                />
                <input
                    type="text"
                    name="brand"
                    className="w-full p-2 mb-2 rounded-md border border-gray-300"
                    placeholder="Brand Name"
                    defaultValue={productinfo.brandname}
                />
                <input
                    type="text"
                    name="type"
                    className="w-full p-2 mb-2 rounded-md border border-gray-300"
                    placeholder="Type"
                    defaultValue={productinfo.category}
                />
                <input
                    type="number"
                    name="price"
                    className="w-full p-2 mb-2 rounded-md border border-gray-300"
                    placeholder="Price"
                    defaultValue={productinfo.price}
                />
                <textarea
                    className="w-full p-2 mb-2 rounded-md border border-gray-300"
                    rows="4"
                    name="description"
                    placeholder="Description"
                    defaultValue={productinfo.short_description}
                ></textarea>
                <input
                    type="number"
                    name="rating"
                    className="w-full p-2 mb-2 rounded-md border border-gray-300"
                    placeholder="Rating"
                    defaultValue={productinfo.rating}
                />
                <button
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    <input type="submit" value="Add Product" />
                </button>
            </form>
        </div>

    </div>
    );
};

export default Update;