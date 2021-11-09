import React,{useState,useEffect} from 'react'
import Login from './components/Login';
import firebase ,{auth}from './services/firebase';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//  Route,
//   Link,
//   Routes,
//   Switch
// } from "react-router-dom";



import './App.css';
import Home from "./components/Home";
import QuiZ from "./components/quiZ";



function App() {
  const user = useState(null);
  console.log(user[0])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(use => {
      user[1](use);
      // navigate('/quiZ')
      
    })
  },[user[0]])

 console.log(user[0]==null,"apps")
  return (
    
    <BrowserRouter>
    <div className="App">
      
        <Routes>
         {
           (user[0]==null)?<Route path='/' element={<Home user={user} />}></Route> :<Route path='/' element={<QuiZ user={user} />}></Route>
         }
         
      
          {/* <Route path='products' element={<Products />}></Route> */}
        </Routes>    
    </div>
    </BrowserRouter>
    

  );
}

export default App;
