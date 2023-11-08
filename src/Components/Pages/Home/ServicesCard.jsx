import {Link} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ServicesCard = ({service}) => {

    // eslint-disable-next-line react/prop-types
    const {_id,  title, img, price} = service

    return (
        <div className="card w-auto lg:w-96 bg-base-100 shadow-xl rounded-md">

            <img src={img} alt="Shoes" className="rounded-xl w-full lg:w-11/12 h-auto lg:h-52 mx-auto my-5"  />

            <div className="p-5 flex justify-between items-center -mt-4">
                <div>
                    <h2 className="card-title text-3xl mb-3">{title}</h2>
                    <p className="text-red-500 font-bold">Price: {price} </p>
                </div>
                <div>
                    <Link to={`/checkout/${_id}`}><button className="text-2xl text-rose-500 font-bold"> &rarr; </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;