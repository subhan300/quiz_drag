import React,{useState} from 'react'
import "./Login.css"
import {Formik, Form} from "formik"
import {Link} from "react-router-dom"
import { signInWithGoogle, signInWithEmailAndPassword } from '../../services/firebase';

import {FcGoogle} from "react-icons/fc";
function Login({user}) {

  
  const signIn=()=>{
    signInWithGoogle();
  

  }
 

   

    
    
    return (
      <>

      <div className="login_container">
       
       <div class="Login">
          <div class="title">
          <h2  class="titleText"><span>L</span>ogin</h2>
          </div>
          <br />
          <Formik
     initialValues={{ email: '', password: '' }}
     validate={values => {
       const errors = {};
       if (!values.email) {
         errors.email = 'Required';
       } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
       ) {
         errors.email = 'Invalid email address';
       }
  
       else if(!values.password){
        errors.password="Required"
      }
       return errors;
     }}
     
     


     onSubmit={(values, { setSubmitting }) => {
          
                //  alert(JSON.stringify(values, null, 2));
                 signInWithEmailAndPassword(values.email,values.password)
                //  console.log(values,"values")
                 setSubmitting(false);
              
            }}
   >
     {({
       values,
       errors,
       touched,
       handleChange,
       handleBlur,
       handleSubmit,
       isSubmitting,
       /* and other goodies */
     }) => (
       <form onSubmit={handleSubmit}>

         <div class="inputBox">
         <h4>Email</h4>
         <input required type="email" name="email" placeholder="Email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
         ></input>
           {errors.email && touched.email && errors.email}
         </div>
         <div class="inputBox">
         <h4>Password</h4>
         <input 
           type="password"
           name="password"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.password}
       type="password" placeholder="Password" ></input>
       {errors.password && touched.password && errors.password}
         </div>
      
         <div class="inputBox">
         <button type="submit"    disabled={isSubmitting}>
            Login
         </button>
        
     
         </div>
             
         <div className="inputBox">
         <button className="button_google" onClick={()=>signIn()}><FcGoogle style={{width:"40px",height:"40px"}} />&nbsp;<div>Sign in with Google</div></button>
         </div>

         
</form>)}


</Formik>
     
         <div className="inputBox">
        <Link to="/signup"  style={{textDecoration:"none",}}> <button  className="button_email">Sign Up</button></Link>
         </div>
       </div>
      </div>















      </>
        
    )
    }
 
export default Login
