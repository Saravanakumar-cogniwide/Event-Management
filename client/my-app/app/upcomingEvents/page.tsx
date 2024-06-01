'use client';
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";
import Image from 'next/image';
import Link from 'next/link';
import nodata from '../../public/pommai.png';


const page = () => {

  const [events,setEvents] = useState([]);
  const [userId,setUserId]=useCookies(["userId"]);

  const fetchdata=async()=>{
    const response=await axios.get("http://localhost:5000/api/allEvents");
    const upevents = response.data.filter((event:any)=>{
    return event.ownerid!==userId.userId
   })
   console.log(upevents);
   setEvents(upevents);
  }

  useEffect(()=>{
   fetchdata();
  },[])


  return (
  <div className="m-[65px] min-h-screen">
    <div className="border-b-2 border-slate-300 h-[80px] sticky top-[65px] w-full z-10 ">
      <h1 className="p-5 text-2xl text-black">Upcoming events</h1>
    </div>
    <div className="ml-[2px] flex m-[10px] ">
      {/* <div className="fixed flex">
        <input type="text" className="bg-slate-200 w-[180px] text-black p-2 h-[33px] outline-none" placeholder='search...'/>
        <button className="text-black p-1 bg-slate-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </button>
      </div> */}
       <div>
       <div className='grid grid-cols-3 gap-5 ml-[230px]'>
       {
        events.length==0&&<div className='flex justify-center'>
          <Image src={nodata} alt="no data" width="450" height="450"/>
         </div>
        }

        {
          events.map((event) =>{
              return <div className="w-[380px]  h-[300px] overflow-hidden" key={event.id}>
              <Link  href={"/Eventdetail/"+event.id}>
              <div>
              <img src={event.img} alt={event.title} className='w-full h-[230px] rounded-md'/>
              </div>
              <h2 className='text-black text-md rounded-md'>{event.title.substring(0,20)}...</h2>
              <div>
              <div>
                <div className='flex space-x-2 relative top-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <h2 className='text-purple-900 text-sm bg-purple-100 p-1 rounded-md '>{event.date?.substring(0,10)}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div className='text-purple-900 text-sm bg-purple-100 p-1 rounded-md '>{event.time}</div>
                </div>
              </div>
                </div>
              </Link>
            </div>
          })
      }  
       </div>

       </div>
    </div>
  </div>
  )
}

export default page;


{/*  */}
