import React, { useState } from 'react'
import Header from './Header';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";

const Login = () => {

    const [isLogin,setIsLogin]=useState(false);

    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const loginHandler=()=>{
        setIsLogin(!isLogin);
    }

    const getInputData=async (e)=>{
        e.preventDefault();
        if(isLogin){
          //login
          const user={email,password}
          try{
            const res=await axios.post(`${API_END_POINT}/login`,user,{
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true
            });
            console.log(res);
            if(res.data.success){
              toast.success(res.data.message);
            }
          }catch(error){
            toast.error(error.response.data.message)
            console.log(error)
          }
        }else{
          //register
          const user={fullName,email,password}
          console.log(user)
          try{
            const res=await axios.post(`${API_END_POINT}/register`,user,{
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true
            });
            console.log(res)
            if(res.data.success){
              toast.success(res.data.message);
            }
          }catch(error){
            toast.error(error.response.data.message)
            console.log(error)
          }
        }
        setFullName("");
        setEmail("");
        setPassword("");
    }

  return (
    <div>
      <Header/> 
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh]' src="https://imgs.search.brave.com/xK9mtj1qM1BP0PDUZj3zCrldMXtDhbQWI75AQKN_0w0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI1LzA0/LzRlLzI1MDQ0ZTdl/MWM2YTYxOGY3NmQ1/NTc0YjBmNjQ4Njg5/LmpwZw" alt="banner"/>
      </div>
      <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-85'>
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin?"Login":"Sign Up"}</h1>
        <div className='flex flex-col'>
            {!isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Full Name' className='outline-none my-2 rounded-sm p-3 text-white bg-gray-800'/>
            }
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none my-2 rounded-sm p-3 text-white bg-gray-800'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none my-2 rounded-sm p-3 text-white bg-gray-800'/>
            <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-bold'>{isLogin?"Login":"Submit"}</button>        
            <p className='text-white mt-2'>{isLogin?"New to Netflix?":"Already have an account?"} <span onClick={loginHandler} className='ml-1 text-blue-900 font-md cursor-pointer'>{isLogin?"Sign Up":"Login"}</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login
