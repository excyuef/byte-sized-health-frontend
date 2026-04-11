import InputCheckIn from "./InputCheckIn";
import ButtonCheckIn from "./ButtonCheckIn";

function CheckIn() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-[#025CEA] text-2xl font-bold text-center drop-shadow-xl">
          Selamat Datang Kembali, User!
        </h2>
      <div>
        <InputCheckIn />
      </div>
      <div>
        <ButtonCheckIn />
      </div>
    </div>
  );
}

export default CheckIn;
