import { signInWithGoogle } from '../services/firebase';
import Sign from "./registration/Login.js"
import '../App.css';

const Login = ({user}) => {
 

  return (
    <div>
      <Sign user={user} />
    
    </div>
  )
}

export default Login;