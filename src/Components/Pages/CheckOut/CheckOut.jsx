import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckOut = () => {

    const services = useLoaderData();
    const {title, _id, price, img} = services;

    const {user} = useContext(AuthContext);

    const handleConfirmOrder = (e) =>{
        e.preventDefault();
        
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const message = form.message.value;


        const order = {
           customerName: name,
           email,
           date,
           service_title: title,
           service_id: _id,
           price: price,
           message,
           img
        }

        console.log(order);



        fetch('https://car-doctor-server-nbmny7zzu-azadgmtls-projects.vercel.app/orders',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast('Order Confiremd')
            }
        })


        form.reset();
    }

    return (
 
       


        <div className="mx-auto w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
             <ToastContainer />
            <h2 className="text-3xl text-center font-bold mb-12">Chekout for : <span className="text-rose-500">{title}</span> </h2>
            <div className="mx-auto w-auto lg:w-10/12 bg-slate-100">
                <form onSubmit={handleConfirmOrder} action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3 mb-5 w-12/12 mx-auto">
                        <div>
                            <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="w-full lg:w-12/12 px-3 py-4 rounded-md bg-white border border-green-200 focus:outline-0 focus:border focus:border-rose-500"/>
                        </div>

                        <div>
                            <input type="datetime-local" name="date" className="w-full lg-w-12/12 px-3 py-4 rounded-md bg-white border border-green-200 focus:outline-0 focus:border focus:border-rose-500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3 w-12/12 mx-auto">
                        <div>
                            <input type="number" name="phone" placeholder="Your Phone" className="w-full lg:w-12/12 px-3 py-4 rounded-md bg-white border border-green-200 focus:outline-0 focus:border focus:border-rose-500" />
                        </div>

                        <div>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="w-full lg:w-12/12 px-3 py-4 rounded-md bg-white border border-green-200 focus:outline-0 focus:border focus:border-rose-500" />
                        </div>
                    </div>

                    {/* Add the textarea input field below phone and email */}
                    <div className="w-12/12 mx-auto">
                        <textarea name="message" placeholder="Your Message" className="w-full h-auto lg:h-44 px-3 py-4 rounded-md bg-white border border-green-200 focus:outline-0 focus:border focus:border-rose-500" rows="4"
                         style={{ resize: "none" }}/>
                    </div>

                    <div className="w-12/12 mx-auto">
                        <button  className="bg-rose-500 py-3 w-full text-white rounded-md">Confirm Order</button>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default CheckOut;