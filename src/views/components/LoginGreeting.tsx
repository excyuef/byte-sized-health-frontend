import Logo from '/logo.png'
import { HiHome } from "react-icons/hi";

type GreetingsProps = {
  type: string
  handler: () => void
}

export default function LoginGreeting({ type, handler }: GreetingsProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-45 px-5">
      <div className="flex flex-col items-center justify-center gap-6">
        <img src={Logo} alt="Logo" className="w-54 h-auto" />
        <h2 className="font-bold text-4xl">
          {type === "login" ? "Welcome Back!" : "Hellowww"}
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold">
          {type === "login" ? "Belum punya akun? " : "Sudah punya akun? "}
          <button

            className="text-[#025CEA]"
            onClick={() => handler()}>
            {type === "login" ? "Daftar sekarang" : "Login sekarang"}
          </button>
        </p>
        <p className="font-bold">
          <a href="/"
            className="flex gap-1 items-center">
            Kembali ke Beranda<HiHome size="1.2em" />
          </a>
        </p>
      </div>
    </div>

  )
}
