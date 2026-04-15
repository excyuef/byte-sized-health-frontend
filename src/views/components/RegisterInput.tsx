import { useState } from "react";
import ButtonLogin from "./ButtonLogin";
import RegisterProgress from "./RegisterProgress";
import Input from '@/views/components/Input'

function RegisterInput() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
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
    <div className="bg-[#025CEA] h-full w-full rounded-2xl flex flex-col items-center justify-between shadow-2xl py-5">
      <div className="w-full">
        <RegisterProgress />
      </div>
      <h2 className="text-white font-bold text-4xl">Isi Data Diri</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center"
      >
        <div
          className="flex flex-col w-full">
          <Input
            label="Nama"
            type="text"
            placeholder="Masukkan Nama Anda"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <Input
            label="Konfirmasi Password"
            type="password"
            placeholder=""
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
