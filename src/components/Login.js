import { signInWithGoogle } from '../services/firebase';

import '../App.css';

const Login = ({user}) => {
  console.log(user[1],"user1")
  const signIn=()=>{
    signInWithGoogle();
    user[1]("subhan")

  }
  return (
    <div>
      <button className="button" onClick={()=>signIn()}><i className="fab fa-google"></i>Sign in with google</button>
    </div>
  )
}

export default Login;