"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { useCookies } from "react-cookie";
import { useRouter } from 'next/navigation';


const page = () => {


  const [userId,setUserId]=useCookies(["userId"]);
  
      useEffect(()=>{
       if(userId.userId){
        setUserId("userId",null);
        localStorage.clear();
       }
      },[])
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router=useRouter();
      //Register
      const [base64, setBase64] = useState("");
      const handleFileChange = async (e:any) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64(reader.result);
      };
      reader.readAsDataURL(file);
    };

    const[id,setId]=useState("");
    const[susername,setSusername]=useState("");
    const[spassword,setSpassword]=useState("");
    const uid=uuidv4();
   
  const Signup=async()=>{
    console.log(uid+base64+susername+spassword);
  
  if(uid&&base64&&susername&&spassword){
   try{
    const response = await axios.post("http://localhost:5000/api/register",{
      id:uid,
      img:base64,
      username:susername,
      password:spassword
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
    setId("");
    setBase64("");
    setSusername("");
    setSpassword("");
   }
   }
   else{
    toast("crendentials needed", {
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
  

   //Login
  const [lusername, setLusername] = useState("");
  const [lpassword, setLpassword] = useState("");
  const [details, setDetails] = useState("");
  const [toggle, setToggle] = useState(true);
  // const [cookies, setCookies] = useCookies(["userdetails"]);
  // const [image,setImage] = useCookies(["userImage"])
  // const [username, setUsername] = useCookies(["username"]);

  const Login = async () => {
    if(lusername=="admin"&&lpassword=="admin007"){
      router.push("Dashboard/Admin");
      return;
    }
    
    if (lusername && lpassword) {
      try {
        const response = await axios.post("http://localhost:5000/api/login", {
          username: lusername,
          password: lpassword,
        });
        const userdata =response.data.split(" ");
        setUserId("userId",userdata[0]);
        localStorage.setItem("userImage",userdata[1]);
        localStorage.setItem("username",userdata[2]);
        toast("user found", {
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
        router.push('/');
        return;
        
      } catch (error: any) {
        if (error.response && error.response.status === 403) {
          toast("Invalid credentials", {
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
      } finally {
        setLusername("");
        setLpassword("");
      }
    } else {
      toast("crendentials needed", {
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
  };


  const ToggleEvent = () => {
    setToggle(!toggle);
  };

  return (
    <div className="hero min-h-screen">
      <ToastContainer />
      <div className="hero-content text-center">
        <div className="max-w-md">
          {toggle ? (
            <div className="card w-96 shadow-xl bg-slate-50">
              <div className="card-body">
                <h2 className="card-title justify-center text-primary mb-5">
                  Login
                </h2>
                <div className="card-actions justify-center space-y-5">
                  <label className="input input-bordered flex items-center gap-2 bg-gray-200 text-black w-[90%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="email"
                      className="grow"
                      placeholder="Username"
                      value={lusername}
                      required
                      onChange={(e) => setLusername(e.target.value)}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 bg-gray-200 text-black w-[90%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow"
                      placeholder="password"
                      value={lpassword}
                      onChange={(e) => setLpassword(e.target.value)}
                    />
                  </label>
                  <button
                    className="bg-secondary px-[100px] py-2 rounded-md text-white"
                    onClick={Login}
                  >
                    Login
                  </button>
                  <p>
                    Don't have account?{" "}
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={ToggleEvent}
                    >
                      Signup
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="card w-96 shadow-xl bg-slate-50">
              <div className="card-body">
                <h2 className="card-title justify-center text-primary mb-5">
                  Signup
                </h2>

                <input type="file" className="file-input w-[90%] max-w-xs bg-slate-200 ml-4" onChange={handleFileChange}/>
                <div className="card-actions justify-center space-y-5 mt-5">
                  <label className="input input-bordered flex items-center gap-2 bg-gray-200 text-black w-[90%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="email"
                      className="grow"
                      placeholder="Username"
                      value={susername}
                      required
                      onChange={(e) => setSusername(e.target.value)}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 bg-gray-200 text-black w-[90%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow"
                      placeholder="password"
                      value={spassword}
                      onChange={(e) => setSpassword(e.target.value)}
                    />
                  </label>
                  <button
                    className="bg-secondary px-[100px] py-2 rounded-md text-white"
                    onClick={Signup}
                  >
                    Signup
                  </button>
                  <p>
                    Already have an account?{" "}
                    <span
                      className="text-green-500 cursor-pointer"
                      onClick={ToggleEvent}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
