import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import DragDrop from "./DragDrop"
import firebase ,{auth}from '../services/firebase';
 const QuiZ=({user})=> {
    // const [user, setUser] = useState(null);
    const navigate = useNavigate();

    console.log(user[0]?.displayName,"display")
      const signout=()=>{
          auth.signOut();
          navigate("/")
        //   setUser(null)
      }
    return (
        <div>
            <h1> QuiZ</h1>

           <h1 style={{color:"red"}}> {user[0]?.displayName}</h1>
            {/* <DragDrop /> */}

          <br />
            <div style={{marginTop:"50px"}}>
               <button className="button signout" onClick={() =>signout()}>Sign out</button>
            </div>
            
            
        </div>
    )
}



export default QuiZ