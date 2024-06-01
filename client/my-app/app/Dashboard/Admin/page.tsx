'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {


    const[subpage,setSubpage] =useState("user");
    const[userdatas,setUserdatas] = useState([]);
    const[events,setEvents] = useState([]);
    const[feedbacks,setFeedbacks] = useState([]);
    const[eventSearch,setEventSearch]=useState('');
    const[userSearch,setUserSearch]=useState('');
  
      const fetchusers=async()=>{
      const response = await axios.get("http://localhost:5000/api/admin/getUsers");
      // console.log(response.data);
      setUserdatas(response.data);
    }

    const fetchevents=async()=>{
      const response = await axios.get("http://localhost:5000/api/admin/getEvents");
      // console.log(response.data);
      setEvents(response.data);
    }

    const fetchfeedback=async()=>{
      const response = await axios.get("http://localhost:5000/api/admin/allfeedbacks");
      setFeedbacks(response.data);
      console.log(response.data);
    }

    useEffect(()=>{
     fetchusers();
     fetchevents();
     fetchfeedback();
    },[])


  const[contents,setContents]=useState(null);
  const[usercontents,setUsercontents]=useState(null);

  const searchbyuser=async()=>{
    const response = await axios.post(`http://localhost:5000/api/admin/usersearch/${userSearch}`);
    setUsercontents(response.data);
    setContents(null);
  }

  const searchbyevent=async()=>{
    const response = await axios.post(`http://localhost:5000/api/admin/eventsearch/${eventSearch}`);
    setContents(response.data);
    setUsercontents(null);
  }

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

  const deleteUser=async(id:any)=>{
    const confirm = window.confirm('Are you sure you want to delete');
    if(confirm){
    const response=await axios.delete(`http://localhost:5000/api/admin/deleteUser/${id}`);
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
  

  return (
    <div className="min-h-screen bg-purple-600">
      <ToastContainer />
      <div className="mt-[65px] flex">
        <div className="h-[590px] w-[200px] p-5 m-10">
           <p className="flex justify-center text-white text-xl">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
            ADMIN
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          
            </p>
           <div className='ml-[40px] text-md space-y-8 mt-[150px] '>
           <button className={`${subpage==='user' ? ' text-black font-bold':' text-white'}`} onClick={(e)=>setSubpage('user')}>USER</button><br/>
           <button className={`${subpage==='event' ? ' text-black font-bold':'text-white'}`} onClick={(e)=>setSubpage('event')}>EVENT</button><br/>
           <button className={`${subpage==='issue' ? ' text-black font-bold':'text-white'}`} onClick={(e)=>setSubpage('issue')}>FEEDBACK</button>
           <button className={`${subpage==='search' ? ' text-black font-bold':'text-white'}`} onClick={(e)=>setSubpage('search')}>SEARCH</button>
           </div>
        </div>

        <div className="w-full mt-5 mb-5 mr-5 sticky top-[70px] h-[630px] overflow-scroll border-l-2 border-white">
         {
         subpage==="user"&&<div className="m-5">
          <div className="flex p-5 bg-purple-200 text-purple-950 m-1 rounded-lg sticky top-[0px] font-semibold ">
            <p className="ml-[5px]">Profile</p>
            <p className="ml-[260px]">ID</p>
            <p className="ml-[240px]">Username</p>
            <p className="ml-[200px]">Password</p>
          </div>
          
          <div>
          {
            userdatas.map((userdata)=>{
              return <div key={userdata.id} className="flex justify-between items-center odd:bg-purple-50 even:bg-purple-100 m-1 text-black rounded-lg mt-3">
                <img src={userdata.img} alt={userdata.username}  className='h-[50px] w-[50px] rounded-xl m-3 '/>
                <p>{userdata.id}</p>
                <p>{userdata.username}</p>
                <p>{userdata.password.substring(0,30)}...</p>
                <button className='flex justify-items-end mr-10 text-purple-950' onClick={()=>deleteUser(userdata.id)}><svg xmlns= "http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
              </div>
            })
          }
          </div>
        </div>
        }
        {
          subpage==="event"&&<div className='space-y-[20px] p-4'>
            {
              events.map((event)=>{
                return <div key={event.id} className="flex space-x-[100px] text-white">
                <div>
                <img src={event.img} alt={event.title} className="w-[500px] h-[300px] rounded-md"/>
                </div>
                <div className='w-[500px] text-white space-y-2'>
                  <p className='text-lg'>{event.title}</p>
                  <p className='text-slate-300'>{event.description.substring(0,100)}...</p>
                  <p>ID: {event.id}</p>
                  <p>OWNER ID: {event.ownerid}</p>

                  <div className='flex space-x-2'>
                  <p className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                  {event.date?.substring(0,10)}</p>
                  <p className=' flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {event.time}</p>
                  </div>
                  <p className=' flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  {event.location}</p>
                  <p className=' flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>{event.capacity}</p>
                  <p className=' flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                  </svg>
                  {event.noofreg}</p>
                </div>

                <div className='mt-[100px]'>
                <button className='flex justify-items-end mr-10 text-purple-950 bg-purple-200 p-1' onClick={()=>deleteEvent(event.id)}><svg xmlns= "http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
                </div>
                </div>
              })
            }
          </div>
        }

        {
          subpage==="issue"&&<div className='text-black grid grid-cols-3 p-5 gap-5'>
            {
                feedbacks.map((feedback)=>{
                  return <div key={feedback.id} className='bg-purple-200 p-3 w-[400px] rounded-md space-y-2'>
                  <div>
                    <div className='flex space-x-4 border-b-purple-300 border-2 p-2 border-purple-200'>
                       <img src={feedback.img} alt={feedback.username} className='w-[50px] h-[50px] rounded-full'/>
                       <p className='flex justify-center items-center text-center'>{feedback.name}</p>
                    </div>
                    <div className='pt-3 space-y-1 '>
                       <p>ID: {feedback.id}</p>
                       <p>USERNAME: {feedback.username}</p>
                       <p>PHONENO: {feedback.phoneno}</p>
                       <div className="h-[90px] bg-purple-100 p-2 overflow-scroll rounded-sm">
                       <p className='text-black'>{feedback.feedback}</p>
                       </div>
                     </div>
                    </div>
                  </div>
                })
            }
         </div>
        }

        {
          subpage==="search"&&<div className='flex'>
            <div className='space-y-10 m-5 mt-[60px]'>
            <div className='flex'>
            <input type="text" className="rounded-md bg-purple-200 text-black p-1 w-[150px] outline-none" placeholder="search by user id" onChange={(e)=>setUserSearch(e.target.value)}/>
            <button onClick={searchbyuser} className='bg-purple-300 rounded-md text-black p-1 ml-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </button>
            </div>

            <div className="h-[150px] w-[150px] bg-purple-200 rounded-lg space-y-5">
            <label className="flex justify-center items-center  text-purple-900 bg-purple-300 p-3 rounded-sm">User</label>
            <p className="flex justify-center items-center text-3xl text-orange-600">{userdatas.length}</p>
            </div>

            <div className='flex'>
            <input type="text" className="rounded-md bg-purple-200 text-black p-1 w-[150px] outline-none" placeholder="search by event id" onChange={(e)=>setEventSearch(e.target.value)}/>
            <button onClick={searchbyevent} className='bg-purple-300  rounded-md  text-black p-1 ml-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </button>
            </div>
               <div className="h-[150px] w-[150px] bg-purple-200 rounded-md  gap-2 space-y-5">
               <label className="flex justify-center items-center  text-purple-900 bg-purple-300 p-3 rounded-sm">Event</label>
               <p className="flex justify-center items-center text-3xl text-orange-600">{events.length}</p>
               </div>
            </div>

            <div>
              
                {
                usercontents &&<div className="mt-[100px] ml-[150px] text-white space-y-5">
                <img src={usercontents?.img} alt={usercontents?.username} className='w-[300px] h-[300px]'/>
                  <div key={usercontents?.id} className='space-y-3'>
                    <p className='text-black'>ID<span className='pl-3 text-white'>{usercontents?.id}</span></p>
                    <p className='text-black'>USERNAME<span className='pl-3 text-white'>{usercontents?.username}</span></p>
                    <p className='text-black'>PASSWORD<span className='pl-3 text-white'>{usercontents?.password}</span></p>
                  </div> 
                </div>
                }
                  

                   {contents &&<div key={contents?.id} className="flex text-white ml-[70px] w-[800px] gap-5 mt-[150px]">
                    <div>
                    <img src={contents?.img} alt={contents?.title} className="w-[500px] h-[300px] rounded-md"/>
                    </div>
                    <div className='w-[500px] text-white space-y-2'>
                      <p className='text-lg'>{contents?.title}</p>
                      <p className='text-slate-300'>{contents?.description?.substring(0,100)}...</p>
                      <p>{contents?.id}</p>
                      <p>{contents?.ownerid}</p>
                      <div className='flex space-x-2'>
                      <p className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                      </svg>
                      {contents?.date?.substring(0,10)}</p>

                      <p className=' flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {contents?.time}</p>
                      </div>
                      <p className=' flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      {contents?.location}</p>
                      <p className=' flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>{contents?.capacity}</p>
                      <p className=' flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                      </svg>
                      {contents?.noofreg}</p>
                    </div>
                    </div>  
                    }    
            </div>

          </div>
        }
         </div>
        </div>
      </div>
  )
}

          // <div className="collapse bg-base-200">
          //   <input type="checkbox" /> 
          //   <div className="collapse-title text-xl font-medium">
          //     Click me to show/hide content
          //   </div>
          //   <div className="collapse-content"> 
          //     <p>hello</p>
          //   </div>
          // </div>

export default page;


{/* <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
   
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div> */}
