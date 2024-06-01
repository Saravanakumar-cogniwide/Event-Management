"use client";
import axios from 'axios';
import React,{useEffect, useState}from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = ({params}) => {

  const id=params.id;

  // const[editEvent,setEditEvent]=useState([]);

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [date,setDate] = useState('');
  const [location,setLocation] = useState('');
  const [capacity,setCapacity] = useState(0);
  const [time,setTime] = useState('');


  
  const fetchdata=async()=>{
    const response=await axios.get(`http://localhost:5000/api/getEvent/${id}`);
    console.log(response.data);
    setTitle(response.data.title);
    const formatdate=response.data.date.substring(0,10).split("-");
    setLocation(response.data.location);
    setCapacity(response.data.capacity);
    setDescription(response.data.description);
    setDate(formatdate[0]+"-"+formatdate[1]+"-"+formatdate[2]);
    setTime(response.data.time);
  }
  console.log(date);


  useEffect(()=>{
   fetchdata();
  },[])
 
  const updateEvent =async()=>{
    const response=await axios.put('http://localhost:5000/api/updateEvent',{
      id:id,
      title:title,
      description:description,
      date:date,
      location:location,
      capacity:capacity,
      time:time
    });
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
  
  return (
    <div className="hero min-h-screen">
      <ToastContainer />
    <div className="hero-content text-center">
      <div className="max-w-full">
      <div className='grid grid-cols-2 gap-12'>
      <input type="text" value={title} className="input input-bordered w-full max-w-xs bg-gray-300 text-black" onChange={(e)=>setTitle(e.target.value)} />
      <input type="date" value={date}  className="input input-bordered w-full max-w-xs bg-gray-300 mb-2 text-black" onChange={(e)=>setDate(e.target.value)}/>
      <input type="location" value={location} className="input input-bordered w-full max-w-xs bg-gray-300 text-black" onChange={(e)=>setLocation(e.target.value)}/>
      <input type="number" value={capacity}  className="input input-bordered w-full max-w-xs bg-gray-300 text-black" onChange={(e)=>setCapacity(e.target.value)}/>
      <textarea placeholder="Description" value={description} className="textarea textarea-bordered bg-gray-300 text-black" rows={5} cols={30} onChange={(e)=>setDescription(e.target.value)}></textarea>
      <input type="time" value={time}  className="input input-bordered w-full max-w-xs bg-gray-300 text-black" onChange={(e)=>setTime(e.target.value)}/>
      <button className="btn btn-primary bg-secondary text-white w-[300px] m-[10px]" onClick={updateEvent}>Update</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default page
