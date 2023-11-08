
const Banner = () => {
    return (
        <div className="carousel h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/sJ2ZyKz/slide-1.jpg" className="w-full rounded-md" />

                <div className="absolute flex items-center h-full justify-start gap-10  left-0 bg-gradient-to-r from-[#151515]  t-[rgba(21, 21, 21, 0)] px-12">
                    
                    <div className="text-white space-y-7 w-2/3">
                        <h2 className="text-6xl font-bold leading-tight">Affordable Price For Car Servicing</h2>
                        <p className="text-lg leading-normal">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex item-center gap-5">
                            <button className="btn bg-red-500 hover:bg-rose-500 border-0 px-8 text-white">Discover More</button>
                            <button className="btn btn-outline border-white hover:bg-red-500 text-white hover:border-0">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle rounded-full border-0 opacity-70 bg-slate-600 hover:bg-red-500 hover:opacity-100 text-white font-extrabold">❮</a> 
                    <a href="#slide2" className="btn btn-circle rounded-full border-0 opacity-70 bg-slate-600 hover:bg-red-500 hover:opacity-100 text-white font-extrabold">❯</a>
                </div>

            </div> 

            <div id="slide2" className="carousel-item relative w-full">

                <img src="https://i.ibb.co/cT25Zdt/slide-2.jpg" className="w-full rounded-md" />

                <div className="absolute flex items-center h-full justify-start gap-10  left-0 bg-gradient-to-r from-[#151515]  t-[rgba(21, 21, 21, 0)] px-12">
                    
                    <div className="text-white space-y-7 w-2/3">
                        <h2 className="text-6xl font-bold leading-tight">Affordable Price For Car Servicing</h2>
                        <p className="text-lg leading-normal">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex item-center gap-5">
                            <button className="btn bg-red-500 hover:bg-rose-500 border-0 px-8 text-white">Discover More</button>
                            <button className="btn btn-outline border-white hover:bg-red-500 text-white hover:border-0">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle  rounded-full border-0 opacity-70 bg-slate-600 hover:bg-red-500 hover:opacity-100 text-white font-extrabold">❮</a> 
                    <a href="#slide3" className="btn btn-circle rounded-full border-0 opacity-70 bg-slate-600 hover:bg-red-500 hover:opacity-100 text-white font-extrabold">❯</a>
                </div>
            </div> 

            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/4VCpHdx/slide-3.jpg" className="w-full rounded-md" />

                <div className="absolute flex items-center h-full justify-start gap-10  left-0 bg-gradient-to-r from-[#151515]  t-[rgba(21, 21, 21, 0)] px-12">
                    
                    <div className="text-white space-y-7 w-2/3">
                        <h2 className="text-6xl font-bold leading-tight">Affordable Price For Car Servicing</h2>
                        <p className="text-lg leading-normal">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex item-center gap-5">
                            <button className="btn bg-red-500 hover:bg-rose-500 border-0 px-8 text-white">Discover More</button>
                            <button className="btn btn-outline border-white hover:bg-red-500 text-white hover:border-0">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle rounded-full border-0 opacity-70 bg-slate-600 hover:bg-red-500 hover:opacity-100 text-white font-extrabold">❮</a> 
                    <a href="#slide4" className="btn btn-circle rounded-full border-0 opacity-70 bg-slate-600 hover:bg-red-500 hover:opacity-100 text-white font-extrabold">❯</a>
                </div>
            </div> 

            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/T2vd6NN/slide-4.jpg" className="w-full rounded-md" />

                <div className="absolute flex items-center h-full justify-start gap-10  left-0 bg-gradient-to-r from-[#151515]  t-[rgba(21, 21, 21, 0)] px-12">
                    
                    <div className="text-white space-y-7 w-2/3">
                        <h2 className="text-6xl font-bold leading-tight">Affordable Price For Car Servicing</h2>
                        <p className="text-lg leading-normal">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div className="flex item-center gap-5">
                            <button className="btn bg-red-500 hover:bg-rose-500 border-0 px-8 text-white">Discover More</button>
                            <button className="btn btn-outline border-white hover:bg-red-500 text-white hover:border-0">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle rounded-full border-0 opacity-70 bg-slate-600 hover:bg-red-500 hover:opacity-100 text-white font-extrabold">❮</a> 
                    <a href="#slide1" className="btn btn-circle rounded-full border-0 opacity-70 bg-slate-600 hover:bg-red-500 hover:opacity-100 text-white font-extrabold">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;