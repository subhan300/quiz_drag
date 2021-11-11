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
import Category from './components/Category';
import GlobalContextProvider from './components/GlobalContext/globalContext';



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
    <GlobalContextProvider >
    <BrowserRouter>
    <div className="App">
      
        <Routes>
         {
           (user[0]==null)?<Route path='/' element={<Home user={user} />}></Route> :<Route path="/" element={<Category />}></Route>
         }
         
         {
           (user[0]==null)?<Route path='/quiZ' element={<Home user={user} />}></Route> :<Route path="/quiZ"   element={<QuiZ user={user} />}></Route>
         }
         
       
        </Routes>    
    </div>
    </BrowserRouter>
    </GlobalContextProvider >

  );
}

export default App;
