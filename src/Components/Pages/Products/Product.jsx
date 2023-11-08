/* eslint-disable react/prop-types */
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({ product }) => {
  const { image, title, price, stars } = product;

  return (
      <div className="card-container relative group transition-all ease-in-out hover:border cursor-pointer">
        <div className="card w-auto lg:w-96 bg-base-100 shadow-xl rounded-md ">
          <figure className="p-12 bg-slate-100 w-11/12 mx-auto my-4 rounded-md h-52">
            <img src={image} alt="Shoes" className="rounded-md w-10/12 mx-auto" />
          </figure>
          <div className="card-body items-center text-center">
            <span className="text-2xl text-[#FF3811] font-bold">{stars}</span>
            <h2 className="card-title text-2xl text-cyan-900 font-bold"> {title} </h2>
            <p className="text-[#FF3811] text-xl font-bold"> ${price} </p>
          </div>
        </div>
        <div className="cart-icon absolute top-16 right-5 opacity-0 group-hover:opacity-100">
          <FaShoppingCart className="text-2xl font-bold text-[#FF3811]" />
        </div>
      </div>
  );
};

export default Product;
