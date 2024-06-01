'use client';
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from 'next/image';
import nodata from '../../public/pommai.png';
import Link from 'next/link';


const page = () => {

  const [base64, setBase64] = useState("");
  const handleFileChange = async (e:any) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setBase64(reader.result);
  };
  reader.readAsDataURL(file);
};

  const [subpage,setSubpage]=useState('add');
  const [userId,setUserId]=useCookies(["userId"]);


  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [date,setDate] = useState(new Date());
  const [location,setLocation] = useState('');
  const [capacity,setCapacity] = useState(0);
  const [time,setTime] = useState('');
  // const [phoneno,setPhoneno] = useState(0);
  const uid=uuidv4();

  const addEvent=async()=>{
    console.log(title+description+date+location+capacity+time+base64)
  if(title&&description&&date&&location&&capacity&&time&&base64){
    // console.log(title+description+date+location+capacity+time+base64)
   try{
     const response = await axios.post("http://localhost:5000/api/addEvent",{
      id:uid,
      ownerid:userId.userId,
      title:title,
      description:description,
      date:date,
      location:location,
      capacity:capacity,
      noofreg:0,
      time:time,
      img:base64,

     })
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
   }catch(err){
   console.log(err);
   }finally{
          // setTitle('');
          // setDescription('');
          // setDate(0);
          // setLocation('');
          // setCapacity(0);
   }
  }else{
    toast('Details Required', {
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
}
const [events,setEvents]=useState([]);

useEffect(()=>{
  const fetchdata=async()=>{
    const response=await axios.get(`http://localhost:5000/api/myEvent/${userId.userId}`);
    setEvents(response.data);
  }
 fetchdata(); 
},[])


const deleteEvent=async(id:any)=>{
  const confirm = window.confirm('Are you sure you want to delete');
  if(confirm){
  const response=await axios.delete(`http://localhost:5000/api/DeleteEvent/${id}`);
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
  else{
    return;
  }
}

const[regEvents,setRegEvents] =useState([]);

useEffect(()=>{
  const fetchdata=async()=>{
    const response=await axios.get(`http://localhost:5000/api/getallregisterEvent/${userId.userId}`);
    setRegEvents(response.data);
  }
 fetchdata(); 
},[])


const CancelEvent=async(id:any)=>{
  const confirm = window.confirm('Are you sure you want to cancel');
  if(confirm){
  const response=await axios.post(`http://localhost:5000/api/cancelEvent/${userId.userId}/${id}`)
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
}


return (
<div className="hero min-h-screen">
<ToastContainer />
  <div className="hero-content flex-col lg:flex-row">
    <div className="space-y-5 flex flex-col flex-start"> 
    <button className={`${subpage==='add' ? 'btn btn-primary bg-blue-600 w-[200px] text-white transition scale-110':'btn btn-primary text-white bg-secondary transition w-[200px]'}`} onClick={(e)=>setSubpage('add')}>ADD EVENT</button>
    <button className={`${subpage==='event' ? 'btn btn-primary bg-blue-600 w-[200px]  text-white transition scale-110':'btn btn-primary text-white bg-secondary  transition w-[200px]'}`}  onClick={(e)=>setSubpage('event')}>MY EVENT</button>
    <button className={`${subpage==='reg' ? 'btn btn-primary bg-blue-600 w-[200px]  text-white transition scale-110':'btn btn-primary text-white bg-secondary transition w-[200px]'}`}  onClick={(e)=>setSubpage('reg')}>BOOKINGS</button>
    </div>
    <div className='h-[550px] w-[1100px] ml-12 p-10 bg-white mt-11 rounded-lg overflow-scroll shadow-2xl'>
      {subpage.includes('add')&&<div className='grid grid-cols-2 gap-10 p-5'>
      <div className='space-y-10'>
      <input type="file" className="file-input w-[90%] max-w-xs bg-slate-200" placeholder='event picture..' onChange={handleFileChange}/>
      <input type="text" placeholder="title" className="input input-bordered w-full max-w-xs bg-gray-100 text-black" onChange={(e)=>setTitle(e.target.value)} />
      <input type="date" placeholder="date" className="input input-bordered w-full max-w-xs bg-gray-100 mb-2 text-black" onChange={(e)=>setDate(e.target.value)}/>
      <input type="location" placeholder="location" className="input input-bordered w-full max-w-xs bg-gray-100 text-black" onChange={(e)=>setLocation(e.target.value)}/>
      </div>
      <div className='space-y-10'>
      <input type="number" placeholder="capacity" className="input input-bordered w-full max-w-xs bg-gray-100 text-black" onChange={(e)=>setCapacity(e.target.value)}/>
      <input type="time" placeholder="time" className="input input-bordered w-full max-w-xs bg-gray-100 text-black" onChange={(e)=>setTime(e.target.value)}/>
      <textarea placeholder="Description" className="textarea textarea-bordered bg-gray-100 text-black" rows={5} cols={50} onChange={(e)=>setDescription(e.target.value)}></textarea>
      <button className="bg-purple-500 w-[200px] hover:bg-purple-700 hover:scale-110 text-white font-bold py-2 px-4 rounded transition-transform duration-300 ease-in-out" onClick={addEvent}>POST</button>
      </div>
      </div>
     }
        
      
      {subpage.includes('event')&&<div className='gap-10 space-y-5'>  
        {
        events.length===0&&<div className='flex justify-center'>
          <Image src={nodata} alt="no data" width="450" height="450"/>
         </div>
        }
          {
            events.map((event:any)=>{
              return <div key={event.id} className='bg-slate-100 p-10 flex justify-around rounded-md ' id="event">
              <div>
              <img src={event.img} alt={event.title} className='h-[120px] w-[200px] rounded-md'/>
              </div>
              <div>
              <p className=' text-black'>Title</p><p className='text-slate-500 '>{event.title.substring(0,10)}...</p>
              <p className=' text-black'>Date</p><p className='text-slate-500'>{event.date.substring(0,10)}</p>
              <p className='text-slate-700'>{event.time}</p>
              </div>
              <div>
              <p className=' text-black '>Location</p><p className='text-slate-500'>{event.location}</p>
              <p className=' text-black '>Capacity<p className='text-slate-500 '>{event.capacity}</p></p>
              </div>
              <div>
              <p className=' text-black '>NoofRegistration<p className='text-slate-500 '>{event.noofreg}</p></p>
              <p className=' text-black '>Description<p className='text-slate-500 '>{event.description.substring(0,10)}...</p></p>
              </div>
              <div className='space-y-5 m-2'>
              <Link  href={"/Editevent/"+event.id}>
              <button className="bg-zinc-200 py-2 px-6 text-black rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
              </button>
                </Link><br/>
              <button className="bg-zinc-200 py-2 px-6 text-black rounded-lg" onClick={()=>deleteEvent(event.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>

              </button>
              </div>
              </div>
            })
          }
         </div>
        }

      
      {subpage.includes('reg')&&<div className='gap-10 space-y-5'>  
       {
         regEvents.length===0&&<div className='flex justify-center'>
           <Image src={nodata} alt="no data" width="450" height="450"/>
          </div>
       }
           {
             regEvents.map((event:any)=>{
               return <div key={event.id} className='bg-slate-100 p-10 flex justify-around rounded-md' id="reg">
              <div>
              <img src={event.img} alt={event.title} className='h-[120px] w-[200px] rounded-md'/>
              </div>
               <div>
               <p className='  text-black'>Title</p><p className='text-slate-500 '>{event.title.substring(0,10)}...</p>
               <p className='  text-black'>Date</p><p className='text-slate-500'>{event.date.substring(0,10)}</p>
               <p className='text-slate-700'>{event.time}</p>
               </div>
               <div>
               <p className='  text-black '>Location</p><p className='text-slate-500'>{event.location}</p>
               <p className=' text-black '>Capacity<p className='text-slate-500 '>{event.capacity}</p></p>
               </div>
               <div>
               <p className=' text-black'>NoofRegistration<p className='text-slate-500 '>{event.noofreg}</p></p>
               <p className=' text-black'>Description<p className='text-slate-500 '>{event.description.substring(0,10)}...</p></p>
               </div>
               <div className='space-y-5 mt-6'>
               <button className="bg-zinc-200 py-2 px-6 text-black rounded-lg" onClick={()=>CancelEvent(event.id)}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
               </button>
               </div>
               </div>
             })
           }
          </div>
         }

    </div>
  </div>
</div>
  )
}

export default page
