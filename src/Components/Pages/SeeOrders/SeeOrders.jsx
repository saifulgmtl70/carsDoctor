import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2';
import { TiTimes } from 'react-icons/ti';

const SeeOrders = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    const url = `https://car-doctor-server-nbmny7zzu-azadgmtls-projects.vercel.app/orders?email=${user?.email}`;

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))

    },[]);

    const handleDelete = (_id) =>{
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   

            fetch(`https://car-doctor-server-nbmny7zzu-azadgmtls-projects.vercel.app/orders/${_id}`,{
                method: 'DELETE',
                
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Cart Data has been deleted.',
                        'success'
                    )
                    // eslint-disable-next-line react/prop-types
                    const remaining = orders.filter(cart => cart._id !== _id);
                    setOrders(remaining);
                }
            })

            }
        });



    }


    return (
        <div>

            <section className="px-12 py-10">
                <h3 className="text-center text-4xl font-medium mb-12">Your Cart</h3>
                <div className="mx-auto w-11/12">   

                    <div className="">
                            {orders.length === 0 ? (
                                <h2 className="text-center text-rose-500 font-medium text-3xl">Your Cart is empty</h2>
                            ) : (
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr className="text-xl text-cyan-900">
                                            <th>Service Photo</th>
                                            <th>Customer Name</th>
                                            <th>Customer Email</th>
                                            <th>Service Title</th>
                                            <th>Service Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {orders.map((order) => (
                                            <tr className="text-lg" key={order._id}>
                                                <td>
                                                    <img src={order.img} className="w-24 h-20 rounded-md" alt="Product" />
                                                </td>
                                                <td>{order.customerName}</td>
                                                <td>{order.email}</td>
                                                <td>{order.service_title}</td>
                                                <td>{order.price}</td>
                                                <td>
                                                    <button onClick={() => handleDelete(order._id)} className=" text-rose-500 rounded-sm text-3xl"> <TiTimes></TiTimes> </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                    </div>  
                             
                </div>
            </section>

        </div>
    );
};

export default SeeOrders;