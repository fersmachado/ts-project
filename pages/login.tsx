import { useRouter } from "next/router";
import type { NextPage } from 'next'
import Buttom from '../src/atomic/atoms/Button';




const Login: NextPage = () => {
    
const router = useRouter();

  return (
    <div>
        <Buttom onClick={() => router.push("/")} text="Login"></Buttom>
      
    </div>
  )
}

export default Login;


// logar home