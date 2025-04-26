import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';
import {API_END_POINT} from "../utils/constant";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setLoading, setUser} from '../Redux/slice/userSlice'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName,setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(store => store.app.isLoading);

    const loginHandler = () =>{
        setIsLogin(!isLogin);
    }

    const getInputData = async (e) => {
        e.preventDefault();
       
        if (isLogin) {
            // login
            dispatch(setLoading(true));
            const user = { email, password };
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });
    
                if (res && res.data) {
                    if (res.data.user) {
                        // console.log("Inside DATA USER res.data.user ->>>> ", res.data.user);
                        dispatch(setUser(res.data.user));
                        navigate("/browse");
                    } else {
                        console.error('User data is missing in the response');
                    }
    
                    if (res.data.success) {
                        toast.success(res.data.message);
                    }
                } else {
                    console.error('Invalid response structure or empty response');
                }
            } catch (e) {
                if (e.response && e.response.data && e.response.data.message) {
                    toast.error(e.response.data.message);
                    console.log(`Error in Login file and getInputData function at login: ${e.response.data.message}`);
                } else {
                    toast.error('An unknown error occurred');
                    console.log(`Error in Login file and getInputData function at login: ${e}`);
                }
            }finally{
                dispatch(setLoading(false));
            }
        } else {
            // register
            dispatch(setLoading(true));
            const user = { fullName, email, password };
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user, {
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    withCredentials: true
                });
    
                if (res.data.success) {
                    toast.success(res.data.message);
                }
                setIsLogin(true);
            } catch (e) {
                if (e.response && e.response.data && e.response.data.message) {
                    toast.error(e.response.data.message);
                    console.log(`Error in Login file and getInputData function at register: ${e.response.data.message}`);
                } else {
                    toast.error('An unknown error occurred');
                    console.log(`Error in Login file and getInputData function at register: ${e}`);
                }
            }
            finally{
                dispatch(setLoading(false));
            }
        }
    
        // Clear form fields
        setFullName("");
        setEmail("");
        setPassword("");
    };
    
    

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='w-[100vw] h-[100vh]' src='https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp' alt='banner'/>
        </div>
        <form onSubmit={getInputData} className='flex flex-col w-3/12 p-8 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-90 rounded-md'>
            <h1 className='text-3xl text-white mb-5 font-bold select-none '> {isLogin ? "Login" : "Signup"} </h1>
            <div className='flex flex-col'>
                { !isLogin && <input value={fullName} onChange={(e) => setFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/> }
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='mail' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                <button className='text-white bg-red-600 mt-6 p-3 font-medium rounded-sm mb-2'>{`${isLoading ? "loading...": (isLogin ? "Log in" : "Sign up")} `}</button>
                <p className='text-white'>{isLogin ? "New user ?" : "Already have an account?"} <span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'> {isLogin ? "signup" : "login" }</span></p>
            </div>
        </form>
      </div>
  )
}

export default Login
