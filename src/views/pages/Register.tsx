import RegisterInput from '../components/RegisterInput.tsx';
import Greeting from '../components/LoginGreeting.tsx';

function Login() {
  return (
    <div className="bg-white w-220 h-140 rounded-2xl flex items-center justify-center shadow-2xl p-4">
      <RegisterInput />
      <Greeting>
        Hello!
      </Greeting>
    </div>
  );
}

export default Login;
