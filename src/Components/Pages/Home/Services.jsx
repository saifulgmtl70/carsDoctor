
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {

    const [services, setServices] = useState([]);

   useEffect(() =>{
        fetch('https://car-doctor-server-nbmny7zzu-azadgmtls-projects.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
   }, [])

    return (
        <div>
            <div className="text-center mb-10">
                <span className="text-lg text-red-500 font-bold">Service</span>
                <h2 className="text-5xl text-cyan-950 font-bold mb-3">Our Service Area</h2>
                <p className="text-slate-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto lg:mx-0">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;