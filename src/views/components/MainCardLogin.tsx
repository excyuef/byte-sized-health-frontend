import Logo from "../../assets/logo.jpeg";
import SecondCardLogin from "./SecondCardLogin";
import HomeIcon from "./HomeIcon"

function MainCardLogin() {
  return (
    <div className="bg-white w-220 h-140 rounded-2xl flex items-center justify-center shadow-2xl p-4">
      <div className="flex flex-col items-center justify-between gap-45 px-5 w-1/2">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src={Logo} alt="Logo" className="w-54 h-auto" />
          <h2 className="font-bold text-4xl">Welcome Back!</h2>
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
            className="flex gap-2 items-center">Kembali ke Beranda <HomeIcon /></a>
          </p>
        </div>
      </div>
      <SecondCardLogin />
    </div>
  );
}

export default MainCardLogin;
