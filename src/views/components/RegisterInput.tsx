import { useState } from "react";
import ButtonLogin from "./ButtonLogin";
import RegisterProgress from "./RegisterProgress";
import Input from '@/views/components/Input'
import AccountButton from "./AccountButton";

import FacebookLogo from '@/assets/facebook-logo.png'
import GoogleLogo from '@/assets/google-logo.png'

function RegisterInput() {
  const [progress, setProgress] = useState(1);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  // const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleProgress = (): void => {
    setProgress((prev) => prev + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setNama("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setProgress(1)

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
    <div className="bg-[#025CEA] h-full w-full rounded-2xl flex flex-col items-center shadow-2xl py-8">
      <div className="w-full px-4">
        <RegisterProgress
          progress={progress} />
      </div>

      {progress === 1 ? (
        <div
          className="flex flex-col gap-4 justify-center h-full pb-12">
          <p className="text-white text-center"
            onClick={handleProgress}>
            Sign-up with
          </p>

          <AccountButton
            title='Facebook'
            img={FacebookLogo} />
          <AccountButton
            title='Google'
            img={GoogleLogo} />
        </div>

      ) : progress === 2 ? (
        <div
          className="flex flex-col justify-center items-center">
          <h2 className="text-white font-bold text-3xl">Isi Data Diri</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 items-center"
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

            <div
              className="mt-4">
              <ButtonLogin
                loading={loading}
                disabled={
                  loading ||
                  !nama ||
                  !password ||
                  !confirmPassword
                }
                children="Register"
                handleOnClick={handleProgress}
              />

            </div>
          </form>
        </div>

      ) : (
        <div
          className="m-auto pb-12">
          <span
            className="text-3xl font-semibold text-white">
            Login Selesai!
          </span>
        </div>
      )}
    </div>
  );
}

export default RegisterInput;
