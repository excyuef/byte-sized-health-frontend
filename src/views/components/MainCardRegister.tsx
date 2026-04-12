import TahapIsiDataDiri from "./TahapIsiDataDiri";

function MainCardRegister() {
  return (
    <div className="bg-white w-220 h-140 rounded-2xl flex items-center justify-center shadow-2xl p-4">
      <div className="flex flex-col items-center justify-between gap-45 px-5 w-1/2">
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="font-bold text-4xl">Hello!</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold">
            Sudah punya akun?{" "}
            <a href="#" className="text-[#025CEA]">
              Login Disini
            </a>
          </p>
          <p className="font-bold">
            <a href="#">Kembali ke Beranda</a>
          </p>
        </div>
      </div>
      <TahapIsiDataDiri />
    </div>
  );
}

export default MainCardRegister;
