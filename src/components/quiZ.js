import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

import firebase ,{auth}from '../services/firebase';
 const QuiZ=()=> {
    // const [user, setUser] = useState(null);
    const navigate = useNavigate();


      const signout=()=>{
          auth.signOut();
          navigate("/")
        //   setUser(null)
      }
    return (
        <div>
            <h1> QuiZ</h1>

          <br />
            <div style={{marginTop:"20px"}}>
               <button className="button signout" onClick={() =>signout()}>Sign out</button>
            </div>
            
            
        </div>
    )
}



export default QuiZ