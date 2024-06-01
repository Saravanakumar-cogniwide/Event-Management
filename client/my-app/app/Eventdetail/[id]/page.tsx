'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { useRouter } from 'next/navigation';

const page = ({params}) => {

 const id=params.id;
 const[event,setEvent] =useState([]);
 const [userId,setUserId]=useCookies(["userId"]);

 // eslint-disable-next-line react-hooks/rules-of-hooks
 const router=useRouter();
 

   
 const fetchdata=async()=>{
  const response=await axios.get(`http://localhost:5000/api/getEvent/${id}`);
  console.log(response.data);
  setEvent(response.data);
}

useEffect(()=>{
 fetchdata();
},[])

const RegisterEvent=async(id:any)=>{
  const response=await axios.post(`http://localhost:5000/api/registerEvent/${userId.userId}/${id}`)
  console.log(response.data);
  toast(response.data, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    style: {
      background: "#333",
      color: "#fff",
      fontSize: "16px",
      padding: "10px 20px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    },
  });
}


const pageNavigate=()=>{
  router.push('/upcomingEvents');
}

  return (
    <div className="min-h-screen">
      <ToastContainer />
      <div className="mt-[65px] flex space-x-5 ">
        <div className='m-[130px] '>
          <img src={event.img} alt={event.title} className="w-[600px] h-[400px] rounded-lg"/>
        </div>
        <div className='m-[100px] w-[600px]'>
          <p className='text-black text-2xl'>{event.title}</p><br/>
          <p className='text-slate-400'>{event.description}</p><br/>
          <p className='text-black flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg>
          {event.date?.substring(0,10)}</p><br/>
          <p className='text-black flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          {event.location}</p><br/>
          <p className='text-black flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>{event.capacity}</p><br/>
          <p className='text-black flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
          {event.noofreg}</p><br/>
          <p className='text-black flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          {event.time}</p><br/><br/>
          <button className="bg-purple-500  w-[200px] hover:bg-purple-700 hover:scale-110 text-white py-2 px-4 rounded transition-transform duration-300 ease-in-out" onClick={()=>RegisterEvent(event.id)}>{event.capacity===event.noofreg?"event full":"Register"}</button>
          <button className="bg-black text-white w-[200px] py-2 px-4 rounded ml-5" onClick={()=>pageNavigate()}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default page
