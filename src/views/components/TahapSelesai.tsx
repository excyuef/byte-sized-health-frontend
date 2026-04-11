import TahapSelesaiIcon from "./TahapSelesaiIcon";

function TahapSelesai() {
  return (
    <div className="bg-[#025CEA] w-1/2 h-full rounded-2xl flex flex-col items-center justify-center shadow-2xl p-5">
      <div className="flex flex-col items-center justify-between h-1/2">
        <TahapSelesaiIcon />
        <h2 className="text-white font-bold text-4xl">Selesai</h2>
      </div>
    </div>
  );
}

export default TahapSelesai;
