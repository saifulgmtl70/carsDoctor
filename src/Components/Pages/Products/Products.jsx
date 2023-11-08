import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <div className="text-center mb-10">
                <span className="text-red-500 font-bold text-lg"> Popular Products </span>
                <h2 className="text-5xl font-bold text-cyan-900 mb-5"> Browse Our Products </h2>
                <p className="text-slate-600">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }

            </div>

        </div>
    );
};

export default Products;