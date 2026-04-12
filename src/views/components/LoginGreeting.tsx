import type { PropsWithChildren } from 'react'
import Logo from '/logo.png'

export default function LoginGreeting({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center justify-between gap-45 px-5 w-1/2">
      <div className="flex flex-col items-center justify-center gap-6">
        <img src={Logo} alt="Logo" className="w-54 h-auto" />
        <h2 className="font-bold text-4xl">
          {children}
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold">
          Belum punya akun?{" "}
          <a href="#" className="text-[#025CEA]">
            Daftar Sekarang
          </a>
        </p>
        <p className="font-bold">
          <a href="#"
            className="flex gap-2 items-center">
            Kembali ke Beranda
          </a>
        </p>
      </div>
    </div>

  )
}
