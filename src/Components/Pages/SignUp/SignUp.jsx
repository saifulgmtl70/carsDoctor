
import { useContext } from 'react';
import login from '../../../../public/Login/login.svg';
import Swal from 'sweetalert2'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import {Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const location = useLocation();
    const naviGate = useNavigate();



    const handleSignup = (e) =>{
        e.preventDefault();

        const form = e.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;


        const user = {name,  email, password };
        console.log(user);


        if(email ==='' || password ===''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please, fillup the input fields',
               
              })
            return;
        }

        else if(password.length < 6){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your password should be at least 6 characters or more longer than',
               
              })
            return;
        }

        else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your password should contain with uppercae,lowercase,num and speical character.',
               
              })
            return;
        }

        
    
        createUser(email, password)
            .then((result) =>{
            console.log(result.user);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Account created successfully',
                showConfirmButton: false,
                timer: 1500
            });
            naviGate(location?.state ? location.state : '/login');
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
                    <form onSubmit={handleSignup} className="mb-0 mt-6 space-y-8 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <h3 className="text-center text-3xl font-bold ">Sign Up</h3>

                        <div>
                            <h3 className='text-lg text-cyan-900 font-medium mb-3'>Username</h3>
                            <div className="relative">
                                <input type="text" name='username' className="w-full rounded-lg border focus:outline-0 focus:border-red-500 p-4 pe-12 text-sm shadow-sm" placeholder="Enter your username" />
                            </div>
                        </div>



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
                                <button className='p-2 bg-[#F5F5F8] rounded-full'>
                                    <FcGoogle></FcGoogle>
                                </button>
                            </div>
                            
                        
                        </div>

                        <p className="text-center text-sm text-gray-500">
                            Already haev account?
                            <Link to='/login' className='text-[#FF3811] font-bold' > Login </Link>
                        </p>
                    </form>
                </div>
            </div>
    );
};

export default SignUp;