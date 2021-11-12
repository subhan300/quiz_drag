import { signInWithGoogle } from '../services/firebase';


const Login = () => {

  const signIn = () => {
    signInWithGoogle();
  }

  return (
    <div>

      <button className="button" onClick={() => signIn()}><i className="fab fa-google"></i>Sign in with google</button>
    </div>
  )
}

export default Login;