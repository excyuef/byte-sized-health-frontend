import { IconContext } from "react-icons";
import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiTear } from "react-icons/bs";

function IconCheckIn() {
  return (
    <IconContext.Provider
      value={{ color: "blue", className: "global-class-name" }}
    >
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center bg-white w-24 py-8 rounded-3xl gap-2 cursor-pointer">
          <BsEmojiGrin size={50} />
          <p className="text-[#025CEA] font-bold text-center">Sangat Senang</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-white w-24 py-8 rounded-3xl gap-2 cursor-pointer">
          <BsEmojiSmile size={50} />
          <p className="text-[#025CEA] font-bold text-center">Senang</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-white w-24 py-8 rounded-3xl gap-2 cursor-pointer">
          <BsEmojiNeutral size={50} />
          <p className="text-[#025CEA] font-bold text-center">Biasa Aja</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-white w-24 py-8 rounded-3xl gap-2 cursor-pointer">
          <BsEmojiFrown size={50} />
          <p className="text-[#025CEA] font-bold text-center">Lelah</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-white w-24 py-8 rounded-3xl gap-2 cursor-pointer">
          <BsEmojiTear size={50} />
          <p className="text-[#025CEA] font-bold text-center">Sangat Lelah</p>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default IconCheckIn;
