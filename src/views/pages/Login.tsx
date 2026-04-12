import LoginGreeting from '@/views/components/LoginGreeting'
import LoginInput from "@/views/components/LoginInput";

function Login() {
  return (
    <div className="bg-white w-220 h-140 rounded-2xl flex items-center justify-center shadow-2xl p-4">
      <LoginGreeting>
        Welcome Back!
      </LoginGreeting>
      <LoginInput />
    </div>
  );
}

export default Login;
