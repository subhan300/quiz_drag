import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Login from './Login'
import firebase ,{auth}from '../services/firebase';
function Home({user}) {

    const navigate = useNavigate();

    

    // useEffect(() => {
    //   firebase.auth().onAuthStateChanged(user => {
    //     setUser(user);
    //     navigate('/quiZ')
        
    //   })
    // }, [user])
  

 
    // console.log("sign in completed !",user);
  
    return (
        <div>
            <h1>Welcome to Home </h1>
              <Login user={user} /> 
       </div>
    )
}

export default Home
