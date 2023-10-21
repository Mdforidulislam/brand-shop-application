import Swal from "sweetalert2";

const Addcard = () => {
    const handleSubmite = (event) =>{
        event.preventDefault()
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const brandname = form.brand.value;
        const price = form.price.value;
        const short_description = form.description.value;
        const rating = form.rating.value;
        const category = form.type.value;
        const productInfo = {img,category,name,brandname,price,short_description,rating}
        console.log(productInfo);
        fetch('https://assigment-10-telectronice-4kjc1hzbo-mdforidulislam.vercel.app/product',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged) {
                Swal.fire(
                    'Good job!',
                    'SuccessFully Added Product!',
                    'success'
                  )
            }
        })
    }
    return (
        <div className=" max-w-screen-xl mx-auto px-6 py-10">
            <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md shadow-md">
                <form  onSubmit={handleSubmite}>
                    <input
                        type="text"
                        name="img"
                        className="w-full p-2 mb-2 rounded-md border border-gray-300"
                        placeholder="Image URL"
                    />
                    <input
                        type="text"
                        name="name"
                        className="w-full p-2 mb-2 rounded-md border border-gray-300"
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="brand"
                        className="w-full p-2 mb-2 rounded-md border border-gray-300"
                        placeholder="Brand Name"
                    />
                    <input
                        type="text"
                        name="type"
                        className="w-full p-2 mb-2 rounded-md border border-gray-300"
                        placeholder="Type"
                    />
                    <input
                        type="number"
                        name="price"
                        className="w-full p-2 mb-2 rounded-md border border-gray-300"
                        placeholder="Price"
                    />
                    <textarea
                        className="w-full p-2 mb-2 rounded-md border border-gray-300"
                        rows="4"
                        name="description"
                        placeholder="Description"
                    ></textarea>
                    <input
                        type="number"
                        name="rating"
                        className="w-full p-2 mb-2 rounded-md border border-gray-300"
                        placeholder="Rating"
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

export default Addcard;