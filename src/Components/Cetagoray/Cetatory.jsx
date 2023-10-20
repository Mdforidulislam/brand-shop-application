import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cetatory = () => {
    const [category , setCategory] = useState([])
    useEffect(()=>{
        fetch('categroy.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
console.log(category);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-6">
            {
                category?.map(singCategory => 
                <div key={singCategory.id}>

                        <div className="card bg-base-100 border-2">
                        <figure className="px-10 pt-10">
                            <img  src={singCategory.img} alt="Shoes" className="rounded-xl w-[400px] h-[200px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{singCategory?.category_name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions w-full">
                                 <Link className="w-full" to={`/product/${singCategory.category_name.toLowerCase()}`}><button className="w-full btn">Explore Products</button></Link>
                            </div>
                        </div>
                        </div>
                </div>)
            }
        </div>
    );
};

export default Cetatory;