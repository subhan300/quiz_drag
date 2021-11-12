import { signInWithGoogle } from '../services/firebase';

import SignIn from "../components/registration/Login"
const Login = () => {

  const signIn = () => {
    signInWithGoogle();
  }

  return (
    <div>

   <SignIn />
    </div>
  )
}

export default Login;