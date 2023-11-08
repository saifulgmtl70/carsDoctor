import { useContext } from 'react';
import login from '../../../../public/Login/login.svg';

import Swal from 'sweetalert2'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import {Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signIn, signInWithGoogle} = useContext(AuthContext);

    const location = useLocation();
    const naviGate = useNavigate();


    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Logged in successfully',
                showConfirmButton: false,
                timer: 1500
            })
            naviGate(location?.state ? location.state : '/');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    };


    const handleLogin = (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        const user = { email, password };
        console.log(user);


      


        signIn(email, password)
        .then(result =>{
            console.log(result);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Logged in successfully',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(error =>{
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        })


        form.reset();

    }


    return (
     

            <div className="mx-auto  py-16 sm:px-6 lg:px-8 flex justify-center flex-col lg:flex-row items-center">
                <div className=''>
                    <img src={login} className="w-10/12 mx-auto" />
                </div>

                <div className="mx-auto w-5/12  border">
                    <form onSubmit={handleLogin} className="mb-0 mt-6 space-y-8 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <h3 className="text-center text-3xl font-bold ">Login</h3>

                        <div>
                            <h3 className='text-lg text-cyan-900 font-medium mb-3'>Email</h3>
                            <div className="relative">
                                <input type="email" name='email' className="w-full rounded-lg border focus:outline-0 focus:border-red-500 p-4 pe-12 text-sm shadow-sm" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div>
                        <h3 className='text-lg text-cyan-900 font-medium mb-3'>Password</h3>
                            <div className="relative">
                                <input type="password" name='password' className="w-full rounded-lg border focus:outline-0 focus:border-red-500 p-4 pe-12 text-sm shadow-sm" placeholder="Enter your password" />
                            </div>
                        </div>

                        <button type="submit" className="block w-full rounded-md bg-[#FF3811] px-5 py-4 text-lg font-medium text-white">Login</button>

                        <div className="flex flex-col w-full border-opacity-50 text-center">
                        
                            <div className="divider">OR</div>
                            <h3 className='text-lg text-cyan-900 font-medium'>Sign in With</h3>
                            <div className='flex justify-center items-center gap-5 mt-4'>
                                <button className='p-2  bg-[#F5F5F8] rounded-full'>
                                    <FaFacebookF className='text-[#3B5998]'></FaFacebookF>
                                </button>
                                <button className='p-2 bg-[#F5F5F8] rounded-full'>
                                    <FaLinkedinIn className='text-[#0A66C2]'></FaLinkedinIn>
                                </button>
                                <button onClick={handleGoogleSignIn} className='p-2 bg-[#F5F5F8] rounded-full'>
                                    <FcGoogle></FcGoogle>
                                </button>
                            </div>
                            
                        
                        </div>

                        <p className="text-center text-sm text-gray-500">
                            No account?
                            <Link to='/signup' className='text-[#FF3811] font-bold' > Sign Up </Link>
                        </p>
                    </form>
                </div>
            </div>
    );
};

export default Login;