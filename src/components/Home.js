import React from 'react'
import Login from './Login'

function Home({user}) {
  
    return (
        <div>
            <h1>Welcome to Home </h1>
            {user[0]?.displayName}
              <Login user={user} /> 
       </div>
    )
}

export default Home
