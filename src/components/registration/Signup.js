import React,{useState} from 'react'
// import { Redirect } from 'react-router-dom'
import "./Signup.css"

import {Formik, Form} from "formik"
import { registerWithEmailAndPassword } from '../../services/firebase'




function Signup() {
    
 
  
    return (
    <>
 
  <div className="signup_container">
        <div class="SignUp">
          
           <div class="title">
           <h2  class="titleText"><span>S</span>ign Up</h2>
           </div>
            <br />
           <Formik
       initialValues={{ email: '', password: '' ,username:''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         else if(!values.username){
           errors.userNAME="Required"
         }
         else if(!values.password){
          errors.password="Required"
        }
         return errors;
       }}
       
       onSubmit={(values, { setSubmitting }) => {
         
            alert(values)     
            registerWithEmailAndPassword(values.username,values.email,values.password);
        
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
           <h4>Username</h4>
           <input type="text" name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}

               
           
           ></input>
            {errors.username && touched.username && errors.username}
           </div>
           <br />
           <div class="inputBox">
           <h4>Email</h4>
           <input required type="email" name="email"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.email}
           ></input>
             {errors.email && touched.email && errors.email}
           </div>
           <br />
           <div class="inputBox">
           <h4>Password</h4>
           <input 
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
         type="password" ></input>
         {errors.password && touched.password && errors.password}
           </div>
       
           <div class="inputBox">
           <button type="submit"  disabled={isSubmitting}>
            Submit
           </button>
           {/* <input type="submit" onClick={submit} value="Sign Up"></input> */}

           </div>

</form>)}
</Formik>
       
       




           </div>
           
        </div>


    </>
    )
}

export default Signup

