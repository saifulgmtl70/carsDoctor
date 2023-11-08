import About from "./About";
import Banner from "./Banner";
import Products from "../Products/Products";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Team from "../Team/Team";
import Testimoial from "./Testimoial";


// import { FaBeer } from 'react-icons/fa';


const Home = () => {
    return (
        <main>
            <section className="w-full lg:w-11/12 lg:mx-auto px-12 py-10">
                <Banner></Banner>
            </section>

            <section className=" w-full lg:w-11/12 lg:mx-auto px-12 mb-10 bg-base-200">
                <About></About>
            </section>

            <section className=" w-full lg:w-11/12 lg:mx-auto px-12 mb-10 bg-base-100">
                <Services></Services>
            </section>

            <section className="w-full lg:w-11/12 mx-auto px-12 py-14 mb-10 bg-slate-500">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                    <div className="flex gap-5">
                        <div>
                            <img src="https://i.ibb.co/86s7B4p/event.png" alt="" className="w-16 h-auto" />
                        </div>
                        <div className="text-white">
                            <p className="text-lg font-normal">We are open monday-friday</p>
                            <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
                        </div>
                    </div>
                    
                    <div className="flex gap-5">
                        <div>
                            <img src="https://i.ibb.co/wR8hRMs/telephone.png" alt="" className="w-16 h-auto " />
                        </div>
                        <div className="text-white">
                            <p className="text-lg font-normal">Have a Question?</p>
                            <h3 className="text-2xl font-bold">+2546 251 2658</h3>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div>
                            <img src="https://i.ibb.co/Y7GFZLz/location.png" alt="" className="w-16 h-auto "  />
                        </div>
                        <div className="text-white">
                            <p className="text-lg font-normal">Need a repair? our address</p>
                            <h3 className="text-2xl font-bold">Liza Street, New York</h3>
                        </div>
                    </div>


                </div>
            </section>

            <section className=" w-full lg:w-12/12 lg:mx-auto px-12 mb-10 bg-base-100">
                <WhyChooseUs></WhyChooseUs>
            </section>

            <section className=" w-full lg:w-11/12 lg:mx-auto px-12 mb-10 bg-base-100">
                <Products></Products>
            </section>

            <section className=" w-full lg:w-11/12 lg:mx-auto px-12 mb-10 bg-base-100">
                <Team></Team>
            </section>

            <section className=" w-full lg:w-11/12 lg:mx-auto px-12 mb-10 bg-base-100">
                <Testimoial></Testimoial>
            </section>

        </main>
    );
};

export default Home;