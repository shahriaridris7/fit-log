'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/app/Image/logo.png'
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const pathname=usePathname();
    const links=
    <>

    <Link  href='/workout'   className={pathname === "/workout" ? " rounded-md bg-lime-900 px-4   font-medium text-lime-400"
             : ""}>Workout </Link>
    <Link href='/myplan'  className={pathname === "/myplan" ? "rounded-md bg-lime-900 px-4  font-medium text-lime-400" : ""}>My plan </Link>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div >
    <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FITLOG logo"
            width={30}
            height={30}
          />
            <h1 className="text-base font-bold">
            FITLOG
          </h1>
        </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-2">
      <Link href='/plan' className="btn-sm ">Plan</Link>
      <Link href='/saved' className="btn-sm ">Saved</Link>
     
    </div>
  </div>
</div>
    );
};

export default Navbar;