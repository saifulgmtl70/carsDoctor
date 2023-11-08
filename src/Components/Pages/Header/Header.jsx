import {  useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { AuthContext } from "../../Provider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
            .then(() =>{
                toast("User has successfully logged out");
            })
            .catch(() =>{
                toast("Something went wrong");
            })
    }

    const navLinks = (
        <>
          <li><NavLink to="/" className="bg-transparent hover:bg-transparent text-lg">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:bg-transparent text-lg">About</NavLink></li>
          <li><NavLink to="/services" className="hover:bg-transparent text-lg">Services</NavLink></li>
          <li><NavLink to="/blog" className="hover:bg-transparent text-lg">Blog</NavLink></li>
          <li><NavLink to="/contact" className="hover-bg-transparent text-lg">Contact</NavLink></li>

          {user && <li><NavLink to="/orders" className="hover:bg-transparent text-lg">Orders</NavLink></li>}
        </>
      );

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar top-0 sticky px-7 lg:px-10 bg-slate-100 shadow-xl z-50">
            <ToastContainer></ToastContainer>
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="cursor-pointer lg:hidden"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? ( 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                            </svg>
                        )}
                    </label>
                    <ul className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-slate-50 rounded-md gap-5 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        {navLinks}
                    </ul>
                </div>

                <NavLink to="/" className="">
                    <img src="/logo.svg" className="w-48 h-16 " alt="" />
                </NavLink>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5 px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end lg:flex gap-4">
                <p className="text-2xl text-cyan-900">
                    <FaShoppingCart ></FaShoppingCart>
                </p>

                <p className="text-2xl text-cyan-900">
                    <BiSearch></BiSearch>
                </p>

                
                {
                    user ?

                        <button onClick={handleLogOut} className="btn hover:bg-rose-500 bg-rose-600 text-white ">Logout</button>
                    :
                    <Link to="/login">
                        <button className="btn bg-transparent hover:bg-transparent border-rose-600 text-rose-500 ">Login</button>
                    </Link>
                }

                
            </div>

           
        </div>
    );
};

export default Header;