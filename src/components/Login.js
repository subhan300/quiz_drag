import { signInWithGoogle } from '../services/firebase';

import '../App.css';

const Login = ({user}) => {
 
  const signIn=()=>{
    signInWithGoogle();
  

  }
  return (
    <div>
      
      <button className="button" onClick={()=>signIn()}><i className="fab fa-google"></i>Sign in with google</button>
    </div>
  )
}

export default Login;