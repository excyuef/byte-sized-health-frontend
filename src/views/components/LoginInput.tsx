import { useState } from "react";
import ButtonLogin from "./ButtonLogin";
import AccountButton from "./AccountButton";
import Input from "./Input";
import FacebookLogo from '@/assets/facebook-logo.png'
import GoogleLogo from '@/assets/google-logo.png'

export default function LoginInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login berhasil (dummy)");
    }, 1000);
  };
  return (
    <div className="bg-[#025CEA] h-full w-full rounded-2xl flex items-center justify-center shadow-2xl">
      <form
        onSubmit={handleSubmit}
        className="items-center justify-start flex flex-col gap-7"
      >
        <h2 className="text-white font-bold text-4xl">Login</h2>

        <div className="flex flex-col gap-0.5">
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-white">
                Remember me
              </label>
            </div>

            <a href="#" className="text-white">
              Forgot Password?
            </a>
          </div>

          <div className="py-5">
            <ButtonLogin
              loading={loading}
              disabled={loading || !email || !password}
              children="Login"
            />
          </div>

          <div className="flex items-center gap-2">
            <hr className="border-white w-1/2" />
            <p className="text-white text-center">Or</p>
            <hr className="border-white w-1/2" />
          </div>


          <div
            className="flex flex-col gap-4">
            <p className="text-white text-center">
              Sign-up with
            </p>

            <AccountButton
              title='Facebook'
              img={FacebookLogo} />
            <AccountButton
              title='Google'
              img={GoogleLogo} />
          </div>
        </div>
      </form>
    </div>
  );
}
