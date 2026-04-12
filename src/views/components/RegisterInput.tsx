import { useState } from "react";
import ButtonLogin from "./ButtonLogin";
import RegisterProgress from "./RegisterProgress";

function RegisterInput() {
  const [nama, setNama] = useState("");
  // const [email, setEmail] = useState("");
  // const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    // validasi
    if (!nama || !password || !confirmPassword) {
      setError("Semua field wajib diisi");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password tidak sama");
      return;
    }

    setLoading(true);

    // simulasi API
    setTimeout(() => {
      setLoading(false);
      alert("Register berhasil (dummy)");
    }, 1000);
  };

  return (
    <div className="bg-[#025CEA] w-1/2 h-full rounded-2xl flex flex-col items-center justify-between shadow-2xl p-5 pb-10">
      <div className="w-full">
        <RegisterProgress />
      </div>
      <h2 className="text-white font-bold text-4xl">Isi Data Diri</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center"
      >
        <div>
          <label className="text-white">Nama Lengkap</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="bg-gray-300 rounded px-2"
          />
        </div>

        <div>
          <label className="text-white">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-300 rounded px-2"
          />
        </div>

        <div>
          <label className="text-white">Konfirmasi Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-300 rounded px-2"
          />
        </div>
        {error && <p className="text-red-300">{error}</p>}

        <ButtonLogin
          loading={loading}
          disabled={
            loading ||
            !nama ||
            !password ||
            !confirmPassword
          }
          children="Register"
        />
      </form>

    </div>
  );
}

export default RegisterInput;
