import TahapMasukkanAkunIcon from "./TahapMasukkanAkunIcon";
import GoogleAccountButton from "./GoogleAccountButton";
import FacebookAccountButton from "./FacebookAccountButton";

function TahapMasukkanAkun() {
  return (
    <div className="bg-[#025CEA] w-1/2 h-full rounded-2xl flex flex-col items-center justify-center shadow-2xl p-5">
      <div
        className="flex flex-col items-center justify-between  
      h-1/2"
      >
        <TahapMasukkanAkunIcon />
        <div className="flex items-center justify-center">
          <h2 className="text-white font-bold text-4xl">Daftar</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start h-1/2 pt-5">
        <GoogleAccountButton />
        <FacebookAccountButton />
      </div>
    </div>
  );
}

export default TahapMasukkanAkun;
