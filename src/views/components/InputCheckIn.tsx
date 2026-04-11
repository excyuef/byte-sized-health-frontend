import IconCheckIn from "./IconCheckIn";

function InputCheckIn() {
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <h2 className="text-white text-xl font-bold text-center drop-shadow-xl">
        Bagaimana Mood Mu Hari Ini?
      </h2>
      <IconCheckIn />
      <div className="bg-white w-full max-w-xl rounded-3xl p-6">
        <p className="text-blue-600 font-bold text-lg mb-4">
          SATU HAL KECIL YANG TELAH KAMU LAKUKAN HARI INI?
        </p>
        <input
          type="text"
          className="w-full border-b-2 border-blue-500 bg-transparent outline-none py-2"
        />
      </div>
      <h2 className="text-blue-600 text-xl font-bold text-center drop-shadow-xl">
        ANDA SUDAH TIDUR BERAPA LAMA HARI INI?
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <button className="bg-white rounded-full px-8 py-4 text-blue-600 font-bold text-xl border border-blue-500 cursor-pointer">
          {"< 8 Jam"}
        </button>

        <button className="bg-white rounded-full px-8 py-4 text-blue-600 font-bold text-xl border border-blue-500 cursor-pointer">
          8 Jam
        </button>

        <button className="bg-white rounded-full px-8 py-4 text-blue-600 font-bold text-xl border border-blue-500 cursor-pointer    ">
          {"> 8 Jam"}
        </button>

        <button className="bg-white rounded-full px-8 py-4 text-blue-600 font-bold text-xl border border-blue-500 cursor-pointer">
          Tidak Tidur
        </button>
      </div>
    </div>
  );
}

export default InputCheckIn;
