'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../../my-app/public/logo.png';
import { useCookies } from "react-cookie";

import { usePathname } from 'next/navigation';

const Navbar = () => {

  const [userId,setUserId]=useCookies(["userId"]);
  const currentPath =usePathname();
  console.log(currentPath);

  const pages = [
    {link:"/",page:"Home"},
    {link:"/about",page:"About"},
    {link:"/contact",page:"Contact"},
  ]

 if(userId.userId){
  pages.push({link:"/upcomingEvents",page:"Upcoming Events"})
  pages.push({link:"/myevent",page:"Event"},)
 }

  const userImage = localStorage.getItem("userImage");
  const username = localStorage.getItem("username");

  const logout=()=>{
    setUserId("userId",null);
    localStorage.clear();
}

return (  
<div className="navbar shadow-2xl fixed top-0 bg-slate-100 z-10">
  <div className="navbar-start">
    <div className="dropdown sm:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    <div className="ml-10">
      {/* <p className="text-purple-900 font-sans font-bold text-xl">Cogniwide</p> */}
      <Image src={logo} width="200" height="10"/>
    </div>
  </div>
  <div className="navbar-center">
    <ul className="flex space-x-10 text-gray-400">
    {
      pages.map((page,index)=>{
        return <p key={index}>
          <Link href={page.link} className={`${page.link===currentPath ? 'text-[#640D6B] font-bold':'text-gray-400'}`} >{page.page}</Link>
          </p>
      })
    }
    </ul>
  </div>
  <div className="navbar-end pl-10">

{
  userId.userId ?
  <div className="dropdown mr-10 z-10">
  <img src={userImage} width="50px" height="50px" className="rounded-full ml-[200px]" tabIndex={0} role="button"/>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box bg-zinc-200 space-y-2 ">
    <li>
    {username && 
    <div className="overflow-scroll bg-white w-[200px] p-2 rounded-xl">
    <p className="text-orange-500 px-[6px] items-center">{username.toUpperCase()}</p>
    </div>
    }
    </li>
    <li>
    <button className="bg-secondary px-[80px] py-2 rounded-md text-white hover:bg-red-500 w-[200px] " onClick={logout}>logout</button></li>
  </ul>
</div> :<Link href="/login" className="py-2 px-4 bg-purple-800 text-white rounded-full mr-5">Login</Link>
}
  </div>
</div>

  )
}

export default Navbar;
