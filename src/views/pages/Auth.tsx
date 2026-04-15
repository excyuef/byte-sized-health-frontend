import { useState } from 'react'

import LoginGreeting from '@/views/components/LoginGreeting'
import LoginInput from "@/views/components/LoginInput";
import RegisterInput from "@/views/components/RegisterInput"

function Login() {
  const [isLogin, setLogin] = useState(false)

  const pageToggle = () => {
    setLogin(!isLogin)
  }

  console.log(isLogin)

  return (
    <div className="relative w-220 h-140 overflow-hidden rounded-2xl shadow-2xl bg-white">

      <div
        className={`absolute w-1/2 h-full left-0 top-0 flex items-center justify-center transition-all duration-500 ${isLogin
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
          }`}
      >
        <LoginGreeting type="login" handler={pageToggle} />
      </div>

      <div
        className={`p-4 absolute w-1/2 h-full right-0 top-0 flex items-center justify-center transition-all duration-500 ${isLogin
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
          }`}
      >
        <LoginInput />
      </div>

      <div
        className={`p-4 absolute w-1/2 h-full left-0 top-0 flex items-center justify-center transition-all duration-500 ${!isLogin
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
          }`}
      >
        <RegisterInput />
      </div>

      <div
        className={`absolute w-1/2 h-full right-0 top-0 flex items-center justify-center transition-all duration-500 ${!isLogin
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
          }`}
      >
        <LoginGreeting type="register" handler={pageToggle} />
      </div>

    </div>
  );
}

export default Login;
