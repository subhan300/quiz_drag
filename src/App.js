import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Quiz from "./components/quiZ";
import Category from './components/Category';
import firebase from '@firebase/app-compat';
import Signup from './components/registration/Signup';



function App() {
  const user = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(use => {
      user[1](use);
    })
  }, [user[0]]);


  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          {
            (user[0] == null) ? <Route path='/' element={<Home user={user} />}></Route> : <Route path="/" element={<Category />}></Route>
          }
  
           
              {
            (user[0] == null) ? <Route path='/signup' element={<Signup />}></Route> : <Route path="/quiz" element={<Quiz user={user} />}></Route>
          }
          
          {
            (user[0] == null) ? <Route path='/quiz' element={<Home user={user} />}></Route> : <Route path="/quiz" element={<Quiz user={user} />}></Route>
          }


        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
