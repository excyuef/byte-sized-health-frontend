import { useState } from "react";
import TahapIsiDataDiriIcon from "./TahapIsiDataDiriIcon";
import ButtonLogin from "./ButtonLogin";

function TahapIsiDataDiri() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    // validasi
    if (!nama || !email || !telepon || !password || !confirmPassword) {
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
    <div className="bg-[#025CEA] w-1/2 h-full rounded-2xl flex flex-col items-center justify-center shadow-2xl p-5">
      <div className="flex flex-col items-center justify-between h-1/2">
        <TahapIsiDataDiriIcon />
        <h2 className="text-white font-bold text-4xl">Isi Data Diri</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-start flex-col gap-1 w-full h-1/2"
      >
        <label className="text-white">Nama Lengkap</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="bg-gray-300 rounded px-2"
        />

        <label className="text-white">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-300 rounded px-2"
        />

        <label className="text-white">Nomor Telepon</label>
        <input
          type="text"
          value={telepon}
          onChange={(e) => setTelepon(e.target.value)}
          className="bg-gray-300 rounded px-2"
        />

        <label className="text-white">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-300 rounded px-2"
        />

        <label className="text-white">Konfirmasi Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-gray-300 rounded px-2"
        />

        {error && <p className="text-red-300">{error}</p>}

        <ButtonLogin
          loading={loading}
          disabled={
            loading ||
            !nama ||
            !email ||
            !telepon ||
            !password ||
            !confirmPassword
          }
          children="Register"
        />
      </form>
    </div>
  );
}

export default TahapIsiDataDiri;
