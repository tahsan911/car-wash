import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { RiMenu5Line, RiShoppingCart2Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import logo from './../images/logo/Car Wash.png';

const Navbar = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar fixed top px-8">
          <div className="flex-1 px-2 mx-2">
            <img src={logo} className="w-32" alt="" />
          </div>
          <div className="flex-none lg:hidden ml-auto">
            <label for="my-drawer-3" className="btn btn-square btn-ghost">
              <RiMenu5Line className='text-3xl' />
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li><NavLink className='mx-4 text-white text-sm uppercase focus:text-primary bg-transparent' to="/">Home</NavLink></li>
              <li><NavLink className='mx-4 text-white text-sm uppercase focus:text-primary bg-transparent' to="/Booking">Booking</NavLink></li>
              <li><NavLink className='mx-4 text-white text-sm uppercase focus:text-primary bg-transparent' to="/AboutUs">About Us</NavLink></li>
              <li><NavLink className='mx-4 text-white text-sm uppercase focus:text-primary bg-transparent' to="/Contact">Contact</NavLink></li>
              <li><NavLink className='mx-4 text-white text-sm uppercase focus:text-primary bg-transparent' to="/CarRental">Car Rental</NavLink></li>
              <li><NavLink className='mr-16 text-white text-sm uppercase focus:text-primary bg-transparent' to="/Products">Products</NavLink></li>
              <li><NavLink className='ml-12 text-white text-sm uppercase focus:text-primary bg-transparent' to="/Products">Sign in</NavLink></li>
              <li><NavLink className=' text-white  uppercase focus:text-primary bg-transparent' to="/Login">
                <AiOutlineUser className='text-xl' />
              </NavLink></li>
              <li><NavLink className=' text-white  uppercase focus:text-primary bg-transparent' to="/Cart">
                <RiShoppingCart2Line className='text-xl' />
              </NavLink></li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side drawer-end">
        <label for="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-4/6 bg-base-100 pt-12 pl-8 ">
          {/* <!-- Sidebar content here --> */}
          <li><NavLink className='text-white uppercase focus:text-primary bg-transparent' to="/">Home</NavLink></li>
          <li><NavLink className='text-white uppercase focus:text-primary bg-transparent' to="/Booking">Booking</NavLink></li>
          <li><NavLink className='text-white uppercase focus:text-primary bg-transparent' to="/AboutUs">About Us</NavLink></li>
          <li><NavLink className='text-white uppercase focus:text-primary bg-transparent' to="/Contact">Contact</NavLink></li>
          <li><NavLink className='text-white uppercase focus:text-primary bg-transparent' to="/CarRental">Car Rental</NavLink></li>
          <li><NavLink className='text-white uppercase focus:text-primary bg-transparent' to="/Products">Products</NavLink></li>
          <li><NavLink className='text-white uppercase focus:text-primary bg-transparent' to="/Products">Sign in</NavLink></li>
          <li><NavLink className=' text-white uppercase focus:text-primary bg-transparent' to="/Login">
            <AiOutlineUser className='text-xl' />
          </NavLink></li>
          <li><NavLink className=' text-white uppercase focus:text-primary bg-transparent' to="/Cart">
            <RiShoppingCart2Line className='text-xl' />
          </NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;