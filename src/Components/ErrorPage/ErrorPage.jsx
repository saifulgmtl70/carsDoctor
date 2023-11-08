import { Link } from "react-router-dom";


const ErrorPage = () => {

    

    return (
 

            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">
                    
                    <img src="https://i.ibb.co/9YvCjQb/Frame.png" className="w-11/12 h-auto mx-auto" />

                    <h1
                    className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                    OOOPS!!! Sorry. Nothing found
                    </h1>

                    <p className="mt-4 text-gray-500">We can not find that page.</p>
                    <Link to="/"><button className="btn bg-rose-500 hover:bg-rose-600 px-12 py-3 rounded-md text-white mt-7">Back to Home</button></Link>
                </div>
            </div>
    );
};

export default ErrorPage;