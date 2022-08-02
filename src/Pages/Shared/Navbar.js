import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/imgMehedi/logo.png";

const Navbar = () => {
    const menuItems =
        <>
            <li className='text-xl font-bold'><NavLink to="/">HOME</NavLink></li>
            <li className='text-xl font-bold'><NavLink to="/resume">RESUME</NavLink></li>
            <li className='text-xl font-bold'><NavLink to="/cv">CV</NavLink></li>
            <li className='text-xl font-bold'><NavLink to="/coverLetter">COVER LETTER</NavLink></li>

        </>

    return (
        <div class="navbar bg-base-100 top-0 fixed z-50 shadow-lg">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-secondary">
                        {menuItems}
                    </ul>
                </div>

                <img src={logo} class="max-w-sm  rounded-full  w-16 lg:w-20" />


            </div>

            <div class="navbar-end hidden lg:flex ">
                <ul class="menu menu-horizontal p-0 text-secondary" >
                    {menuItems}
                </ul>
            </div>

            <div class="navbar-end px-5">

                <ul class="flex">

                    <li>
                        {

                            <Link to="/signup" className="text-secondary font-bold btn btn-ghost text-xl ">SignUp</Link>
                        }
                    </li>

                    <li>
                        {

                            <Link to="/login" className="text-secondary text-xl font-bold btn btn-ghost ">Login</Link>
                        }
                    </li>


                </ul>

            </div>

        </div>
    );
};

export default Navbar;

