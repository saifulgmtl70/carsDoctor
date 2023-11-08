import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Team = () => {
    return (
        <div>
            <div className="text-center mb-10">
                <span className="text-red-500 font-bold text-lg"> Team </span>
                <h2 className="text-5xl font-bold text-cyan-900 mb-5">Meet Our Team</h2>
                <p className="text-slate-600">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div className="card-container relative group transition-all ease-in-out cursor-pointer">
                    <div className="card w-auto lg:w-96 bg-base-100 shadow-xl rounded-md border">

                        <img src="https://i.ibb.co/1TBRS7D/1.jpg" alt="Shoes" className="rounded-md my-3 w-11/12 mx-auto" />
                        <div className="text-center my-2">
                            <h2 className="text-2xl text-cyan-900 font-bold mb-1"> Car Engine Plug </h2>
                            <span className="text-sm text-slate-700 mb-6">Engine Expert</span>
                            <div className="my-5 flex justify-center items-center gap-4">
                                <p className='bg-[#395185] text-white p-2 rounded-full'> <FaFacebookF></FaFacebookF> </p>
                                <p className='bg-[#55ACEE] text-white p-2 rounded-full'> <FaTwitter></FaTwitter> </p>
                                <p  className='bg-[#0A66C2] text-white p-2 rounded-full'> <FaLinkedinIn></FaLinkedinIn> </p>
                                <p className='bg-[#D8447A] text-white p-2 rounded-full'> <FaInstagram></FaInstagram> </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-container relative group transition-all ease-in-out cursor-pointer">
                    <div className="card w-auto lg:w-96 bg-base-100 shadow-xl rounded-md border">

                        <img src="https://i.ibb.co/1XTLD4x/2.jpg" alt="Shoes" className="rounded-md my-3 w-11/12 mx-auto" />
                        <div className="text-center my-2">
                            <h2 className="text-2xl text-cyan-900 font-bold mb-1">Car Engine Plug </h2>
                            <span className="text-sm text-slate-700 mb-6">Engine Expert</span>
                            <div className="my-5 flex justify-center items-center gap-4">
                                <p className='bg-[#395185] text-white p-2 rounded-full'> <FaFacebookF></FaFacebookF> </p>
                                <p className='bg-[#55ACEE] text-white p-2 rounded-full'> <FaTwitter></FaTwitter> </p>
                                <p  className='bg-[#0A66C2] text-white p-2 rounded-full'> <FaLinkedinIn></FaLinkedinIn> </p>
                                <p className='bg-[#D8447A] text-white p-2 rounded-full'> <FaInstagram></FaInstagram> </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-container relative group transition-all ease-in-out cursor-pointer">
                    <div className="card w-auto lg:w-96 bg-base-100 shadow-xl rounded-md border">

                        <img src="https://i.ibb.co/3sdmh7C/3.jpg" alt="Shoes" className="rounded-md my-3 w-11/12 mx-auto" />
                        <div className="text-center my-2">
                            <h2 className="text-2xl text-cyan-900 font-bold mb-1">Car Engine Plug </h2>
                            <span className="text-sm text-slate-700 mb-6">Engine Expert</span>
                            <div className="my-5 flex justify-center items-center gap-4">
                                <p className='bg-[#395185] text-white p-2 rounded-full'> <FaFacebookF></FaFacebookF> </p>
                                <p className='bg-[#55ACEE] text-white p-2 rounded-full'> <FaTwitter></FaTwitter> </p>
                                <p  className='bg-[#0A66C2] text-white p-2 rounded-full'> <FaLinkedinIn></FaLinkedinIn> </p>
                                <p className='bg-[#D8447A] text-white p-2 rounded-full'> <FaInstagram></FaInstagram> </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;