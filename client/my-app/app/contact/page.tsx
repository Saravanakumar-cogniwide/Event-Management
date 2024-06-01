'use client';
import axios from 'axios';
import React,{useState} from 'react'
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const page = () => {
  
  const uid=uuidv4();
  const userImage = localStorage.getItem("userImage");
  const username = localStorage.getItem("username");
  const[name,setName] =useState("");
  const[phoneno,setPhoneno] = useState("");
  const[feedback,setFeedback] = useState("");


  const submitform=async()=>{
  try{
  const response = await axios.post("http://localhost:5000/api/admin/feedback",{
   id:uid,
   img:userImage,
   username:username,
   name:name,
   phoneno:phoneno,
   feedback:feedback
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
    setName('');
    setPhoneno('');
    setFeedback('');
  }
}

  return (
    <div className="hero min-h-screen">
      <ToastContainer />
    <div className="hero-content text-center">
      <div className="max-w-full">
        <p className="text-2xl text-orange-500 bg-orange-100 p-2 rounded-md">Feedback</p>
        <div className="space-y-5 mt-4">
          <input type="text" placeholder="name.." className="input input-bordered w-[420px] bg-gray-200 text-black" onChange={(e)=>setName(e.target.value)}/><br/>
          <input type="text" placeholder="phone no.." maxLength={10} className="input input-bordered w-[420px]  bg-gray-200 text-black" onChange={(e)=>setPhoneno(e.target.value)}/><br/>
          <textarea placeholder="Feedback.." className="textarea textarea-bordered bg-slate-200 text-black" rows={5} cols={50} onChange={(e)=>setFeedback(e.target.value)}></textarea><br/>
          <button className="bg-purple-500 text-white w-[420px] p-2 rounded-md" onClick={submitform}>Submit</button>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default page
